import React from "react";
import "../Stylesheets/Footer.css";

function Footer(props) {
    return (
        <footer className="pie-pagina">
            <div className="grupo1">
                <div className="box">
                    <figure>
                        <a href="#">
                            <img src={require(`../Img/${props.wilogo}.png`)} alt="" />
                        </a>
                    </figure>
                </div>
                <div className="box">
                    <h2 className="h2-1">{props.contact}</h2>
                    <p className="numerocont">{props.numero}</p>
                </div>
                <div className="box">
                    <h2 className="siguenos">{props.sigue}</h2>
                    <div className="redsocial">
                        <div>
                            <a href="#"><img className="fb" src={require(`../Img/${props.fbicon}.png`)} alt="" /></a>
                        </div>
                        <div>
                            <a href="#"><img className="ins" src={require(`../Img/${props.insicon}.png`)} alt="" /></a>
                        </div>
                        <div>
                            <a href="#"><img className="tw" src={require(`../Img/${props.twiticon}.png`)} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grupo2">
                <small>&copy; 2022 <b>Wiqaya</b> - Todos los Derechos Reservados.</small>
            </div>
        </footer>
    )
}

export default Footer;