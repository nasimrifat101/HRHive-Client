import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  name: string;
  email: string;
  phone: number;
  designation: string;
  company: string;
}

const AccessForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const info = { ...data, requestedTime: new Date(), approved: "false" };
    console.log(info);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="z-50 bg-white p-10 flex gap-20 w-1/2">
        <div className="space-y-10 w-1/2">
          <p className="text-3xl">Request Access</p>
          <p className="">
            HRHive offers premium Human Resource management software, providing
             all-in-one solution.{" "}
            <span className="font-bold">
              We offer a complimentary six-month trial period
            </span>{" "}
            to allow you to experience the full capabilities of our software.
          </p>
          <p>
            To request, please complete the form. Our team will promptly
            respond to your request and assist you further & you'll get login details in you email after your request is approved.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-1/2 space-y-3"
        >
          <input
            {...register("company")}
            placeholder="Company name"
            className="input input-bordered"
          />

          <input
            {...register("name")}
            placeholder="Your name"
            className="input input-bordered"
          />
          <input
            {...register("designation")}
            placeholder="Your designation"
            className="input input-bordered"
          />
          <input
            {...register("email")}
            placeholder="Email you want to open account with"
            className="input input-bordered"
          />
          <input
            {...register("phone")}
            type="tel"
            placeholder="Phone number"
            className="input input-bordered"
          />

          <button type="submit" className="btn bg-green-300 hover:bg-green-400">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccessForm;
