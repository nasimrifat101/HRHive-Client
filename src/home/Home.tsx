import useAuth from "../Hooks/useAuth";

const Home = () => {
    const {name} = useAuth()
    return (
        <div>
            Hello From {name}
        </div>
    );
};

export default Home;