import React from 'react';
import foto_cauan from '../../assets/cauan.jpeg';
import foto_cleber from '../../assets/cleber.jpg';
import foto_eduardo from '../../assets/eduardo.jpg';
import foto_felipe from '../../assets/felipe.jpeg';
import '../../css/main.css';

class Sobre extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div id='main'>
					<div className="grid">
						<div className="card">
							<div className="img">
								<img src={foto_cauan} alt="Membro" />
							</div>
							<h4>Cauan Norberto</h4>
							<p><a href="mailto:cauan_amaral@estudante.sc.senai.br">Enviar um e-mail</a><br />
								<a href="http://github.com/cauannora" target="_blank" rel='noopener noreferrer'>Acessar perfil do GitHub</a></p>
						</div>
						<div className="card">
							<div className="img">
								<img src={foto_cleber} alt="Membro" />
							</div>
							<h4>Cleber Fischer</h4>
							<p><a href="mailto:cleber_f_oliveira@estudante.sc.senai.br">Enviar um e-mail</a><br />
								<a href="http://github.com/cleber145" target="_blank" rel='noopener noreferrer'>Acessar perfil do GitHub</a></p>
						</div>
						<div className="card">
							<div className="img">
								<img src={foto_eduardo} alt="Membro" />
							</div>
							<h4>Eduardo Cesar</h4>
							<p><a href="mailto:eduardo_veras@estudante.sc.senai.br">Enviar um e-mail</a><br />
								<a href="http://github.com/CesarVeras" target="_blank" rel='noopener noreferrer'>Acessar perfil do GitHub</a></p>
						</div>
						<div className="card">
							<div className="img">
								<img src={foto_felipe} alt="Membro" />
							</div>
							<h4>Felipe Machado</h4>
							<p><a href="mailto:felipe_machado-silva@estudante.sc.senai.br">Enviar um e-mail</a><br />
								<a href="https://github.com/fefemacha" target="_blank" rel='noopener noreferrer'>Acessar perfil do GitHub</a></p>
						</div>
					</div>

					<div className="info">Para o projeto integrador dessa fase, fomos desafiados a programar e desenvolver um desofuscador de dados. <br/>
					Nosso grupo teve diversas dificuldades, como tambem aprendemos muito desenvolvendo o projeto, o grupo se empenhou
					para que tudo fosse feito da melhor forma possivel, cada um se encarregou daquilo que mais se sentia confortavel em
fazer, e assim, conseguimos concluir o projeto com todos os requisitos impostos e de forma saudavel e tranquila.</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Sobre;