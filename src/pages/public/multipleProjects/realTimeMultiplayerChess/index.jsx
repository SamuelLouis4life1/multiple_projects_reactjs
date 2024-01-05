import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";

export function RealTimeMultiplayerChess(props) {

    const { t } = props;

    return (
        <>
            <Container>
                <section className="download-discover-section">
                    <p>My first Real Time Snake Game app</p>

                </section>
            </Container >

            <section className="download-discover-cards">
                <p>My second Real Time Snake Game app</p>
                <p>https://stack-chess-tutorial.netlify.app/docs/07-drag-and-drop</p>
                <p>https://blog.openreplay.com/building-a-chess-game-with-react/</p>
                <p>https://github.com/JelenaStrbac/chess</p>
                <p>https://www.reddit.com/r/reactjs/comments/11w1wqk/i_created_a_realtime_multiplayer_3d_chess_game/</p>
            </section>
        </>
    );
}

export default withTranslation()(RealTimeMultiplayerChess);