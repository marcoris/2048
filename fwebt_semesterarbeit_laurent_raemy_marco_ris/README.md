# FWebT_Semesterarbeit_Laurent_Raemy_Marco_Ris
## Spielidee und Regeln
Beschreibung des zu realisierenden Spiels mit einer genauen Auflistung der Regeln, des Funktionsumfangs und Abgrenzung (was ist NICHT enthalten).

## Technologie Stack
Welche Technologien und Frameworks werden für das Projekt verwendet.
(Kann im Laufe des Projektes noch erweitert werden und gilt nicht verbindlich als final)

## Anforderungen
Auflistung der MUSS und KANN Anforderungen, idealerweise mit Schätzung des Aufwands. Auch zwischen funktionalen und nicht-funktionalen Anforderungen soll unterschieden werden.
Die Anforderungen sind wie folgt zu spezifizieren:

| Name | Sprechender Name                                                                                                                                                                                                                                                                                                                                                     |
|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ID   | Kürzel der Anforderung<br>*FA-023*                                                                                                                                                                                                                                                                                                                                   |
| Ziel | Was soll die Anforderung abdecken.<br>*Ein Spielercharakter kann auf ein Ziel schiessen*                                                                                                                                                                                                                                                                             |
|Ereignis| Wann kommt die Anforderung zum Zuge.<br>*Der Spieler betätigt die [SCHIESSEN] Taste*                                                                                                                                                                                                                                                                                 |
|Vorbedingung| Unter welchen Bedingungen kann die Anforderung auftreten/erfüllt werden.<ul><li>Das Spiel ist gestartet</li><li>Das Spiel ist gestartet</li><li>Der Spieler verfügt über > 0 Trefferpunkte</li><li>Der Charakter hat eine Distanzwaffe ausgewählt, deren aktuelle Munition >0 beträgt                                                                                |
|Standardablauf| Beschreibung des Ablaufs bei Erfüllung der Vorbedingungen.<ol><li>Der Spieler betätigt die [SCHIESSEN] Taste</li><li>Ein Projektil mit dem Sprite des aktuellen Munitionstypus bewegt sich in Schussrichtung</li><li>Das Projektil verschwindet, sobald es den sichtbaren Bereich verlässt</li>3.1 Das Projektil verschwindet, wenn es auf ein Hindernis trifft</li> |
|Alternativablauf| Beschreibung, wenn die Aktion nicht ausgeführt werden kann.<br>*Keine Munition: Soundfile "need ammunition" wird abgespielt<br>   Nahkampfwaffe: Soundfile "sorry, can't do" wird abgespielt*                                                                                                                                                                        |
|Nachbedingung Erfolg| Was passiert nach dem Standardablauf<br>*Munition wird um 1 verringert<br>Gegnertreffer: Der Schaden des Gegners wird berechnet und dessen Trefferpunkt abgezogen*                                                                                                                                                                                                   |
|Nachbedingung Fehler| Was passiert nach dem Alternativablauf<br>-                                                                                                                                                                                                                                                                                                                          |
|Klassifizierung| Funktional, MUSS                                                                                                                                                                                                                                                                                                                                                     |
|Aufwand| MITTEL                                                                                                                                                                                                                                                                                                                                                               |
Bei nicht-funktionalen Anforderungen reicht die ID, der Name, das Ziel und die Klassifizierung.

## Struktur und Planung
Bereich, in welchem Ihr technische und grafische Planungen hinterlegt. Für die erste Abgabe ist ein Wireframe (kann auch von Hand gezeichnet und abfotografiert sein) ausreichend, um die Idee zu versinnbildlichen, im späteren Verlauf Mockups oder direct Screenshots.

Auch technische Strukturen, welche erwähnenswert sind, bereichern diesen Abschnitt.

## Logbuch
Auflistung der Fortschritte, insbesondere zwischen den verschiedenen Abgaben.
Zudem ist eine Auflistung der Projekttasks hier nützlich, jeweils mit einem Status-Kommentar (not started, in progress: on track/in delay, finished).
Wenn Ihr hier mit einem Kanban-ähnlichen Board arbeitet (Trello, Jira, Kanbanize) könnt Ihr auch jeweils einen Link zu diesem hinterlegen (und mir View-Berechtigungen erteilen).