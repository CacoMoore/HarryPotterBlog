import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../store/context";


const Login = () => {
    const { actions } = useContext(Context)
    const navigate = useNavigate();

    return (
        <div
            style={{ borderRadius: '5px', minHeight: '100vh' }}
            className="container mt-4">
            <div className=" tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                tabindex="0">
                <div
                    style={{ borderRadius: '5px' }}
                    className="border shadow-lg m-4 p-2">
                    <div className="m-4">
                        <h3 className="pb-4">Login</h3>
                        <form onSubmit={(e) => actions.handleUserLogin(e, navigate)}>
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
                                <button type="submit" className="btn btn-dark mb-4" >Ingresar</button>
                            </div>
                            <div className="text-center">
                                <p><Link to="/recoverpass">¿Olvidaste tu contraseña?</Link></p>
                            </div>
                            <div className="text-center">
                                <p>¿No eres miembro aún? <Link to="/Register">Regístrate</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login;