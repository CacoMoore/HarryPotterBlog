import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/context";

const Register = () => {
    const { actions } = useContext(Context)
    const navigate = useNavigate();
    return (
        <div
            style={{ borderRadius: '5px', minHeight: '100vh' }}
            className="container mt-4">
            <div
                style={{ borderRadius: '5px' }}
                className="border shadow-lg m-4">
                <div className="m-4">
                    <h3>Regístrate aquí</h3>
                    <form onSubmit={(e) => actions.handleUserRegister(e, navigate)}>
                        <div className="row d-flex justify-content-around p-2">
                            <div className="form-outline mb-4 col-6">
                                <input
                                    onChange={actions.handleChange}
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="form-control"
                                    maxLength={50}
                                    required
                                    placeholder="Máximo 50 caracteres" />
                                <label
                                    className="form-label"
                                    htmlFor="name">Username</label>
                            </div>
                           
                        </div>
                        <div className="row d-flex justify-content-around p-2">
                                                      
                            <div className="form-outline mb-4 col-6">
                                <input
                                    onChange={actions.handleChange}
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    required
                                    maxLength={10} />
                                <label
                                    className="form-label"
                                    htmlFor="password">Contraseña</label>
                            </div>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-dark">Enviar</button>
                        </div>
                        <div className="text-center pt-4">
                            <p>¿Ya eres miembro? <Link to="/Login">Ingresa</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Register;