import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./cards.css"
import { withTranslation } from "react-i18next";

export function CategoryCard({
    t,
    onSelectSlide,
    elementRef,
    gamesCategory,
    title,
}) {
    const [isMouseIn, setIsmouseIn] = useState(false)

    {
        return (
            <Card className="cardBorder text-center mb-3"
                onClick={() => onSelectSlide(gamesCategory)}
                onMouseEnter={() => setIsmouseIn(true)}
                onMouseLeave={() => setIsmouseIn(false)}>
                {
                    isMouseIn ? (
                        <div ref={elementRef} className="gtm_click_gamecategory">

                            <Card.Body className="card-games-body">
                                    <p className="fs-2 textMiddle emphasize text-uppercase">{title}</p>
                            </Card.Body>
                        </div>
                    ) :
                        (
                            <div>
                                <div>
                                    <Card.Title className="card-games-body">
                                        <p className="fs-2 textMiddle emphasize text-uppercase">{title}</p>
                                    </Card.Title>
                                </div>
                            </div>
                        )
                }
            </Card>
        );
    }
}
export default withTranslation()(CategoryCard)