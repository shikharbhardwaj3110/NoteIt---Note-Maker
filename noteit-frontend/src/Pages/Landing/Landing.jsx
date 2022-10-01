import React from 'react';
import './Landing.css';
import HeroImage from '../../assets/hero.png';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div class="landing-wrapper px-4 py-5">
            <div class="landing-container text-center py-5">
                <span class="display-2 text-light landing-title">Capture your thoughts.</span>

                <div class="mt-3">
                    <span class="text-light landing-subtitle">Create, edit and access your notes on the go with NoteIt Note Maker</span>
                </div>
                <div class="mt-5">
                    <img src={HeroImage} width="200" ></img>
                </div>
                <div class="mt-5">
                    <Link to="/login">
                        <button class="btn btn-outline-success text-light border-light hero-button py-2">Get started</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Landing