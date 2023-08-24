import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = () => {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [result, setResult] = useState('');
    const [classificacao, setClassificacao] = useState('');

    const calculaImc = (e) => {
        e.preventDefault();

        if (peso && altura) {
            const imc = peso / (altura * altura);  
            setResult(imc.toFixed(2));

            if (imc < 18.5) {
                setClassificacao('Abaixo do Peso');
            } else if (imc < 24.9) {
                setClassificacao('Peso Normal');
            } else if (imc < 29.9) {
                setClassificacao('Sobrepeso');
            } else if (imc < 34.9) {
                setClassificacao('Obesidade Grau 1');
            } else if (imc < 39.9) {
                setClassificacao('Obesidade Grau 2');
            } else {
                setClassificacao('Obesidade Grau 3');
            }
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.divInput}>
                    <div>
                        <label>Informe seu peso em Kg:</label>
                    </div>
                    <input type="number" onChange={(e) => setPeso(e.target.value)} placeholder="Exemplo: 80"/>
                </div>
                <div className={styles.divInput}>
                    <div>
                        <label>Informe sua altura em metros:</label>
                    </div>
                    <input type="number" onChange={(e) => setAltura(e.target.value)} placeholder="Exemplo: 1.80"/>
                </div>
                <button onClick={calculaImc}>Calcular IMC</button>
            </form>
            <div className={styles.divResultado}>
                <h2>Seu IMC é: <span className={styles.result}>{result}</span></h2>
                <h3>Sua classificação: <span className={styles.classificacao}>{classificacao}</span></h3>
            </div>
        </div>
    );
};

export default Formulario;
