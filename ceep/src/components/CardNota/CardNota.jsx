import React, { Component } from 'react';
import "./estilo.css"

export class CardNota extends Component {
    render() {
        return (
            <section className="card-nota">
                <header>
                    <h3>Titulo</h3>
                </header>
                <p>
                    Escreva sua nota
                        </p>
            </section>
        )
    }
}