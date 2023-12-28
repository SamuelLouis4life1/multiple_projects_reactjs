import React from "react";

import "./index.css";

// import logo from "./logo.png";
// import arroba from "./arroba.png";
// import phone from "./phone.png";
// import whatsapp from "./whatsapp.png";

export default function EmailTemplate() {
	return (
		<>
			<header className="header">
				<div className="containerTemp">
					<table className="logoContainer">
						<tbody>
							<tr>
								<td>
									{/* <img src={logo} alt="Multiple Projects" className="logo" /> */}
									<img src="{logo}" alt="Multiple Projects" className="logo" />
								</td>
								<td className="textRight">
									<p className="m0">Pedido nº ??????</p>
								</td>
							</tr>
						</tbody>
					</table>
					<h1 className="textCenter mt4">Pedido Realizado</h1>
					<hr />
					<table className="table steps">
						<tbody>
							<tr>
								<td className="activeStep">
									<span>&#10003;</span>
								</td>
								<td className="activeStep">Pedido realizado</td>
								<td>
									<span>&#8901;&#8901;&#8901;</span>
								</td>
								<td>Pagamento aprovado</td>
								<td>
									<span>&#8901;&#8901;&#8901;</span>
								</td>
								<td>Pedido faturado</td>
								<td>
									<span>&#8901;&#8901;&#8901;</span>
								</td>
								<td>Pedido enviado</td>
							</tr>
						</tbody>
					</table>
				</div>
			</header>
			<main className="content">
				<div className="containerTemp">
					<p className="m0">Olá [Nome Cliente]</p>
					<br />
					<p className="m0">
						Seu pedido foi realizado e está sendo processado.
					</p>
					<p className="m0">Confira os detalhes abaixo.</p>
					<div className="ps5 pe5">
						<table className="table">
							<tbody>
								<tr>
									<td className="p2">
										<p className="m0">Produto</p>
									</td>
									<td className="p2 textRight">
										<p className="m0">Qtde.</p>
									</td>
								</tr>
								<tr
									className="borderGray borderRadius borderSpacing"
								>
									<td className="p2">
										<p className="bold colorBlue m0">
											Plano Móvel 1GB
										</p>
									</td>
									<td className="p2 textRight">
										<p className="mb0 me3">1</p>
									</td>
								</tr>
								<tr>
									<td className="vTop">
										<div
											className="bgRed p2 borderRadius me2"
										>
											<a
												href="#"
												className="noTextDecoration m0 textCenter"
											>
												Acompanhar meu pedido
											</a>
										</div>
									</td>
									<td
										className="borderGray borderRadius borderSpacing p2"
									>
										<div className="flex justifyContenBetween">
											<p className="m0">Subtotal:</p>
											<p className="m0">R$ 29,99</p>
										</div>
										<div className="flex justifyContenBetween">
											<p className="m0">Frete:</p>
											<p className="m0">R$ 9,11</p>
										</div>
										<div className="flex justifyContenBetween">
											<p className="m0">Total:</p>
											<p className="m0 colorRed bold">
												R$ 9,11
											</p>
										</div>
									</td>
								</tr>
								<tr
									className="borderGray borderRadius borderSpacing"
								>
									<td colSpan="2" className="p2">
										<h5 className="bold">Endereço de entrega</h5>
										<p>
											Rua Dr. Emilio de Vasconcelos Costa, 98, Sala 01 - Centro
										</p>
										<p>Inhaúma / MG</p>
										<p>35763-000 - BRA</p>
									</td>
								</tr>
								<tr
									className="borderGray borderRadius borderSpacing"
								>
									<td colSpan="2" className="p2">
										<h5 className="bold">Forma de pagamento</h5>
										<p>Mastercard</p>
										<p>R$ 29,99</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<br />
					<p className="m0">
						Assim que o pagamento for autorizado você será notificado.
					</p>
					<br />
					<p className="m0">Atenciosamente.</p>
					<p className="m0 bold">Equipe Multiple Projects.</p>
				</div>
			</main>
			<footer className="footer">
				<div className="containerTemp">
					<table className="table">
						<tbody>
							<tr>
								<td className="textCenter vTop" style={{width: "33.33%"}}>
									<img src="{arroba}" alt="Multiple Projects" className="footerImg"/>
									<p className="mt1 mb0 bold italic">e-mail</p>
									<p className="m0">suporte@Multiple Projects.com</p>
								</td>
								<td className="textCenter vTop" style={{width: "33.33%"}}>
									<img src="{phone}" alt="&#128222;" className="footerImg"/>
									<p className="mt1 mb0 bold italic">telefone</p>
									<p className="m0">(21) 3030-1010</p>
									<p className="m0 txtSmall">Tecle 2 para falar com o suporte</p>
									<p className="m0 txtSmall">Atendimento 24 horas</p>
								</td>
								<td className="textCenter vTop" style={{width: "33.33%"}}>
									<img src="{whatsapp}" alt="&#128222;" className="footerImg"/>
									<p className="mt1 mb0 bold italic">whatsapp</p>
									<p className="m0">(21) 93618-0100</p>
									<p className="m0 txtSmall">Atendimento em horário comercial</p>
								</td>
							</tr>
						</tbody>
					</table>
					<table className="table mt4">
						<tbody>
							<tr>
								<td className="textCenter vTop" >
									<a className="siteFooter" href="http://www.Multiple Projects.com">www.Multiple Projects.com</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</footer>
		</>
	);
}