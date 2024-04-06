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
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="z-50 bg-white p-10 flex gap-20 w-1/2">
        <div className="space-y-10">
            <p className="text-3xl">Request Access</p>
            <p className="">HRHive is a premium Human Resource management software. It is a all in one package. But we allow free tria for 3 month, to try our software please request accest. well get back to you asap and figure it out. </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
            {...register("name")}
            placeholder="Name"
            className="input input-bordered"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="input input-bordered"
          />
          <input
            {...register("phone")}
            type="tel"
            placeholder="Phone"
            className="input input-bordered"
          />
          <input
            {...register("designation")}
            placeholder="Designation"
            className="input input-bordered"
          />
          <input
            {...register("company")}
            placeholder="Company"
            className="input input-bordered"
          />
          <button type="submit" className="btn bg-green-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccessForm;
