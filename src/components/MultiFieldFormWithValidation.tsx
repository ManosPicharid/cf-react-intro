import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const initialFormValues = {
  name: "",
  email: "",
  message: "",
};

const MultiFieldFormWithValidation = () => {
  const [values, setValues] = useState<FormValues>(initialFormValues);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [errors, setErrors] = useState<FormErrors | null>(null);

  const validateForm = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
    if (!values.name.trim()) errors.name = "Name is required";

    if (!values.email.trim()) errors.email = "Email is required";
    else if (
      !/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
        values.email.trim()
      )
    )
      errors.email = "Invalid Email";

    if (!values.message.trim()) errors.message = "Message is required";
    else if (values.message.length < 5)
      errors.message = "Message must be more than 5 characters";

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(values);

    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      setSubmittedData(null);
      return;
    }

    setSubmittedData(values);
    setValues(initialFormValues);
    setErrors(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleClear = () => {
    setValues(initialFormValues);
    setSubmittedData(null);
    setErrors(null);
  };

  return (
    <>
      <div className="flex max-w-sm mx-auto mt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 rounded border"
            />
            {errors?.name && <p className="text-cf-dark-red">{errors.name}</p>}
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 rounded border"
            />
            {errors?.email && (
              <p className="text-cf-dark-red">{errors.email}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border"
              placeholder="Type your message"
            ></textarea>
            {errors?.message && (
              <p className="text-cf-dark-red">{errors.message}</p>
            )}
          </div>
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
export default MultiFieldFormWithValidation;
