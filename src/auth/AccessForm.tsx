import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  name: string;
  email: string;
  phone: number;
  designation: string;
  company: string;
}

interface Prop {
  setModal: any;
}

const AccessForm: React.FC<Prop> = ({ setModal }) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const info = { ...data, requestedTime: new Date(), approved: "false" };
      localStorage.setItem("request", JSON.stringify(info));
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setTimeout(() => {
        setModal(false);
      }, 1000);
    } catch (error) {
      console.error("An error occurred:", error);
    }
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
            To request, please complete the form. Our team will promptly respond
            to your request and assist you further & you'll get login details in
            you email after your request is approved.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-1/2 space-y-3"
        >
          <input
            {...register("company", { required: true })}
            placeholder="Company name"
            className="input input-bordered"
          />

          <input
            {...register("name", { required: true })}
            placeholder="Your name"
            className="input input-bordered"
          />
          <input
            {...register("designation", { required: true })}
            placeholder="Your designation"
            className="input input-bordered"
          />
          <input
            {...register("email", { required: true })}
            placeholder="Email you want to open account with"
            className="input input-bordered"
          />
          <input
            {...register("phone", { required: true })}
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
