import React from "react";
import './About.scss';

export const About = () => {
  return(
    <>
      <h1>About</h1>
      <p className="text-left mb-5 about">Im Rahmen einer Semesterarbeit, welche wir anhand des gelernten Stoffes durchführen, dürfen wir ein Spiel auf Basis von React  realisieren. Da wir keine Zeit für Grafiken investieren und den Fokus auf die Programmierung des Spiels setzen wollen, wird das Spiel nur mittels CSS-Formatierungen koloriert.
        Da das Spiel und seine Logik nicht all zu komplex sein sollte, weil wir nur eine begrenzte Umsetzungszeit haben, entscheiden wir uns für ein Spiel, welches keine Elemente wie für einen Shooter (Gegner, Projektile, usw.) beinhaltet.
        Arcade-Spiele wie Space-Invaders oder Pacman, würden eigentlich auch Grafiken besitzen, welche wir ja nicht verwenden, bzw. erstellen möchten.
        Da bleibt nur noch ein Textbasiertes Spiel, weshalb wir uns für das Spiel 2048  entschieden haben.
      </p>
      <h2>Spielregeln</h2>
      <ul className="list-group mb-5">
        <li>Wird auf einem 4x4 Kästchen grossen Spielfeld gespielt</li>
        <li>Es befinden sich Kacheln auf dem Spielfeld, welche mit Zweierpotenzen beschriftet sind (2^1 bis 2^17)</li>
        <li>Wahrscheinlichkeit für eine 2 = 90%, eine 4 = 10%</li>
        <li>Zu Beginn befinden sich 2 Kacheln die eine 2 oder 4 als Wert haben</li>
        <li>Mit Pfeiltasten bewegt der Spieler alle Kacheln in eine Richtung</li>
        <li>Stossen zwei Kacheln mit gleichem Wert ineinander, verschmelzen sie zu einer Kachel mit Summe der beiden Kacheln</li>
        <li>Nach jedem Zug entsteht auf einem leeren Feld eine Kachel mit einem Wert von 2 oder 4</li>
        <li>Punkte werden um den Wert der verschmolzenen Kacheln erhöht</li>
        <li>Das Ziel ist es eine Kachel mit dem Wert 2048 zu erzeugen</li>
        <li>Das Spiel ist somit gewonnen, der Spieler kann aber weiter spielen</li>
        <li>Das Spiel endet sobald es keine leeren Felder mehr gibt</li>
      </ul>
      <h2>Eigene zusätzliche Spielregeln</h2>
      <ul className="list-group">
        <li>Das Spiel endet sobald der Wert 2048 erreicht wurde</li>
        <li>Punkte werden pro Zug um 1 erhöht</li>
        <li>Es gibt die Möglichkeit den letzten Zug 1 Mal rückgängig zu machen</li>
        <li>Es gibt eine zusätzliche Kachel mit dem Wert 8</li>
        <li>Wahrscheinlichkeit für eine 2 = 85%, eine 4 = 10%, eine 8 = 5%</li>
      </ul>
    </>
  )
}
