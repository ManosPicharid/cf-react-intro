import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const initialFormValues = {
  name: "",
  email: "",
  message: "",
};

const MultiFieldForm = () => {
  const [values, setValues] = useState<FormValues>(initialFormValues);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData(values);
    setValues(initialFormValues);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setValues(initialFormValues);
    setSubmittedData(null);
  };

  return (
    <>
      <div className="flex max-w-sm mx-auto mt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 rounded border"
            required
          />
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 rounded border"
            required
          />
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border"
            placeholder="Type your message"
            minLength={5}
            required
          ></textarea>
          <div className="flex gap-4 justify-center">
            <button
              type="submit"
              className="bg-cf-dark-red text-white px-4 py-2 rounded"
            >
              Submit
            </button>
            <button
              onClick={handleClear}
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Clear
            </button>
          </div>

          {submittedData && (
            <div className="mt-6 border-t pt-4 space-y-2">
              <div className="text-center mb-4">
                <h2 className="font-bold">Submitted Data</h2>
              </div>
              <p>
                <strong>Name:</strong> {submittedData?.name}
              </p>
              <p>
                <strong>Email:</strong> {submittedData?.email}
              </p>
              <p>
                <strong>Message:</strong> {submittedData?.message}
              </p>
            </div>
          )}
        </form>
      </div>
    </>
  );
};
export default MultiFieldForm;
