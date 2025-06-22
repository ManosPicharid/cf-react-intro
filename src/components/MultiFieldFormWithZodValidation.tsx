import { useState } from "react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().nonempty("Name is required"),
  email: z.string().trim().nonempty("Email is required").email("Invalid Email"),
  message: z
    .string()
    .trim()
    .nonempty("Message is required")
    .min(5, "Message must be more than 5 characters")
    .max(8, "Message must be less than 8 characters"),
});

type FormValues = z.infer<typeof formSchema>;

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

const MultiFieldFormWithZodValidation = () => {
  const [values, setValues] = useState<FormValues>(initialFormValues);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const result = formSchema.safeParse(values);
    // {success: true, data: validationData}
    // {success: false, errors: errors};

    if (!result.success) {
      const newErrors: FormErrors = {};

      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof FormValues;
        newErrors[fieldName] = issue.message;
      });
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      setSubmittedData(values);
      setValues(initialFormValues);
    }
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
    setErrors({});
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
export default MultiFieldFormWithZodValidation;
