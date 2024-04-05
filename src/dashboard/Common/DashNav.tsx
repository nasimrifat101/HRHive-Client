interface Prop {
  bg: string;
  title: string;
}

const DashNav: React.FC<Prop> = ({ bg, title }) => {
  return (
    <div>
      <div className={`navbar ${bg}`}>
        <div className="flex-1">
          <p className="text-2xl font-semibold">{title}</p>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="flex items-center gap-4 mr-3 ">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold">Nasim Ahamed</p>
              <p className="text-xs font-semibold text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
