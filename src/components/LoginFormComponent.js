import { useState } from "react";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import InputComponent from "./InputComponent";
import RadioButtonComponent from "./RadioButtonComponent";
import ButtonComponent from "./ButtonComponent";
import AlertModal from "./AlertComponent";

const LoginFormComponent = ({ onLogin }) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: "", message: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if(user === "JotaFac" && password === "123456"){
            await new Promise((resolve) => setTimeout(resolve, 3000));
            setLoading(false);
            onLogin();
        }else{
            await new Promise((resolve) => setTimeout(resolve, 3000));
            setLoading(false);
            setAlert({ show: true, type: "error", message: "¡No se encontro un usuario asociado a las credenciales digitadas, por favor verifique!" });
        }
    };
    return (
        <div id="login-container">
            <div className="row login-form">
            <div className="col-lg-12 mb-4 d-flex justify-content-center"><img src="/img/logo-entidad.png" height="150px" alt="Logo de Entidad"/></div>
                <div className="col-lg-12 mb-4"><h3 className="text-center">Módulo de custodia</h3></div>
                <div className="col-lg-12">
                    <form onSubmit={handleSubmit}>
                        <InputComponent
                            type="text"
                            placeholder="Usuario"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            required
                            icon={faUser}
                        />
                        <InputComponent
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            icon={faLock}
                        />
                        <RadioButtonComponent name="recordar-credenciales" label="Recordar credenciales" className="mb-4 mt-2" value="1" onChange={setSelectedValue} />
                        <ButtonComponent type="submit" className="btnPrimary my-2" label="Iniciar" loadlabel="Ingresando..." loading={loading}/>
                        <ButtonComponent type="button" className="btnSecondary" label="Recuperar credenciales" />
                       
                    </form>
                </div>
                <div className="col-lg-12 text-center " style={{ color: "#bcbcbc", marginTop: "51px" }}><p>© {new Date().getFullYear()}</p></div>
                {alert.show && <AlertModal type={alert.type} message={alert.message} onClose={() => setAlert({ ...alert, show: false })} />}
            </div>
        </div>
    );
};

export default LoginFormComponent;