export class RiddleConfig {
    public static password: string = 'ghcv';

    public static riddles: { [id: number]: { quesion: string, answer: string, help: string; code: string } } = {
        0: { quesion: "Sono alto quando sono giovane e basso quando sono vecchio. Cosa sono?", answer: "candela", help: "Si usa per illuminare.", code: "5" },
        1: { quesion: "Cosa ha un collo ma non una testa?", answer: "bottiglia", help: "Si usa per contenere liquidi.", code: "3" },
        2: { quesion: "Cosa può viaggiare intorno al mondo rimanendo nello stesso angolo?", answer: "francobollo", help: "Si attacca alle lettere.", code: "7" },
        3: { quesion: "Cosa ha molte chiavi ma non può aprire nessuna porta?", answer: "pianoforte", help: "Si suona con le mani.", code: "9" },
        4: { quesion: "Cosa diventa più bagnato più asciuga?", answer: "asciugamano", help: "Si usa dopo la doccia.", code: "1" }
    };
};