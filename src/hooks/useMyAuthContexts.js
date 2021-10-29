const { useContext } = require("react")
const { MyAuthContexts } = require("../contexts/MyAuthProvider")

const useMyAuthContexts = () => {
	return useContext(MyAuthContexts);
}

export default useMyAuthContexts;