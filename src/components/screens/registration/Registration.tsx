import RegistrationBlock from "@/common/Registration/RegistrationBlock";
import Authorization from "@/layout/Authorization";

const Registration = () => {
	return (
		<Authorization title={'Регистрация'}>
			<RegistrationBlock></RegistrationBlock>
		</Authorization>
	)
}
export default Registration
