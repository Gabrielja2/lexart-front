import "../style.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const HomeHeader = (props) => {
    const { onSearch } = props;
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();

        await onSearch(e.target.search.value);
    };

    const handleNewProduct = () => {
        navigate("/products");
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <header className="header">
            <div className="form-container">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Digite sua pesquisa..."
                    />
                    <button type="submit">Pesquisar</button>
                </form>
            </div>

            <div>
                <button className="create" onClick={handleNewProduct}>
                    Criar
                </button>
                <button className="logout" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </header>
    );
};

HomeHeader.propTypes = {
    onSearch: PropTypes.func,
};

export default HomeHeader;
