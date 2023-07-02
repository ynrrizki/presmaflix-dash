import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  // const fs = require('fs');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = `${formData.tanggal}|${formData.jam}|${formData.lokasi}|${formData.suhu}\n`;
    // fs.appendFileSync('public/note.txt', data);

    let fso = await window.ActiveXObject("Scripting.FileSystemObject");
    let s = fso.CreateTextFile("http://localhost:3000/note.txt", true);
    s.WriteLine(data);
    s.Close();

    setFormData({});
    navigate("/note");
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-10">Travel Note</h1>
      <div className="bg-primary w-full rounded px-2 py-3">
        <form
          className="md:flex md:flex-col md:justify-start md:items-end"
          onSubmit={handleSubmit}
          method="POST"
        >
          <Input label="tanggal" type="date" onChange={handleChange} />
          <Input label="jam" type="time" onChange={handleChange} />
          <Input label="lokasi" type="text" />
          <Input
            label="suhu tubuh"
            type="text"
            name="suhu"
            onChange={handleChange}
          />
          <div className="flex justify-between pr-10 w-52 mb-5">
            <button
              type="reset"
              className="bg-orange-300 py-2 px-4 rounded hover:bg-orange-400 shadow"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-secondary py-2 px-4 rounded hover:bg-blue-800 shadow"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const Input = ({ type = "text", label, name, onChange }) => {
  if (name === null) {
    name = label;
  }
  return (
    <div className="md:flex md:items-center justify-between my-6 pr-10 w-full">
      <div className="md:w-5">
        <label
          className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pl-8 capitalize"
          htmlFor={name}
        >
          {label}
        </label>
      </div>
      <div className="md:w-2/3 pl-6">
        <input
          type={type}
          className="form-input text-primary font-semibold rounded w-full"
          name={name}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Create;
