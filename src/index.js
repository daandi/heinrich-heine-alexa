/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';

const Alexa = require('alexa-sdk');

var APP_ID = 'heinrich-heine';

const answers = {
    CITATIONS: [
        "Dort wo man Bücher verbrennt, verbrennt man auch am Ende Menschen. ",
        "O weine nicht! Wie glühnde Naphtatropfen, So fallen deine Tränen auf mein Herz. ",
        "In meinem Hirne rumort es und knackt, ich glaube da wird ein Koffer gepackt, und mein Verstand reist ab - o wehe - noch früher als ich selber gehe. ",
        "An deinen Busen sink ich hin, Und glaube, dass ich selig bin. ",
        "Anfangs wollt' ich fast verzagen, Und ich glaubt', ich trüg es nie, Und ich hab es doch getragen, Aber frag mich nur nicht: wie? ",
        "Auf Flügeln des Gesanges, Herzliebchen, trag ich dich fort. ",
        "Es ist eine alte Geschichte Doch bleibt sie immer neu; Und wem sie just passieret, Dem bricht das Herz entzwei. ",
        "Ich bin's gewohnt, den Kopf recht hoch zu tragen, Mein Sinn ist auch ein bischen starr und zähe; Wenn selbst der König mir ins Antlitz sähe, Ich würde nicht die Augen niederschlagen. ",
        "Ich glaube, die Wellen verschlingen Am Ende Schiffer und Kahn; Und das hat mit ihrem Singen Die Lorelei getan. ",
        "Der lange Schnurrbart ist eigentlich nur Des Zopftums neuere Phase: Der Zopf, der ehemals hinten hing, Der hängt jetzt unter der Nase. ",
        "Die Göttin hat mir Thee gekocht Und Rum hineingegossen; Sie selber aber hat den Rum Ganz ohne Thee genossen. ",
        "Fatal ist mir das Lumpenpack, das, um die Herzen zu rühren, den Patriotismus trägt zur Schau, mit allen seinen Geschwüren. ",
        "Ich möchte nicht todt und begraben seyn Als Kaiser zu Aachen im Dome; Weit lieber lebt' ich als kleinster Poet Zu Stukkert am Neckarstrome. ",
        "Ich kenne die Weise, ich kenne den Text Ich kenn auch die Herren Verfasser Ich weiß, sie tranken heimlich Wein Und predigten öffentlich Wasser. ",
        "Sei mir gegrüßt mein Sauerkraut holdselig sind deine Gerüche. ",
        "Sie sang das alte Entsagungslied, Das Eiapopeia vom Himmel ",
        "Sie stelzen noch immer so steif herum, So kerzengerade geschniegelt, Als hätten sie verschluckt den Stock, Womit man sie einst geprügelt. ",
        "Wie unsere großen Meister gesagt und gesungen und wie wir es wollen, wir die Jünger - ja, nicht bloß Elsaß und Lothringen, sondern ganz Frankreich wird uns alsdann zufallen, ganz Europa, die ganze Welt - die ganze Welt wird deutsch werden. Von dieser Sendung und Universalherrschaft Deutschlands träume ich oft, wenn ich unter Eichen wandle. Das ist mein Patriotismus. ",
        "Zu Aachen langweilen sich auf der Straß die Hunde, sie flehn untertänig: Gib uns einen Fußtritt, o Fremdling, das wird vielleicht uns zerstreuen ein wenig. ",
        "In der Weltgeschichte ist nicht jedes Ereignis die unmittelbare Folge eines anderen, die Ereignisse bedingen sich vielmehr wechselseitig. ",
        "In dunklen Zeiten wurden die Völker am besten durch die Religion geleitet, wie in stockfinstrer Nacht ein Blinder unser bester Wegweiser ist; er kennt Wege und Stege besser als ein Sehender. – Es ist aber töricht, sobald es Tag ist, noch immer die alten Blinden als Wegweiser zu gebrauchen. ",
        "Der Historiker ist immer ein Merlin, er ist die Stimme einer begrabenen Zeit, man befragt ihn, und er gibt Antwort, der rückwärtsschauende Prophet. ",
        "Denk ich an Deutschland in der Nacht, dann bin ich um den Schlaf gebracht. ",
        "Das ist schön bei den Deutschen: Keiner ist so verrückt, dass er nicht einen noch Verrückteren fände, der ihn versteht. ",
        "Düfte sind die Gefühle der Blumen. ",
        "Die Stadt selbst ist schön, und gefällt einem am besten, wenn man sie mit dem Rücken ansieht. ",
        "Im allgemeinen werden die Bewohner Göttingens eingeteilt in Studenten, Professoren, Philister und Vieh; welche vier Stände doch nichts weniger als streng geschieden sind. Der Viehstand ist der bedeutendste. Die Namen aller Studenten und aller ordentlichen und unordentlichen Professoren hier herzuzählen, wäre zu weitläufig; auch sind mir in diesem Augenblick nicht alle Studentennamen im Gedächtnisse, und unter den Professoren sind manche, die noch gar keinen Namen haben. ",
        "Rom wollte immer herrschen, und als seine Legionen fielen, sandte es Dogmen in die Provinzen. ",
        "Wenn wir es recht überdenken, so stecken wir doch alle nackt in unseren Kleidern. ",
        "Die deutschen Censoren zensiert zensiert zensiert zensiert zensiert zensiert zensiert Dummköpfe zensiert zensiert zensiert zensiert",
        "Vergnügen ist nichts als ein höchst angenehmer Schmerz. ",
        "Ja, mich dünkt zuweilen, der Teufel, der Adel und die Jesuiten existieren nur so lange, als man an sie glaubt. ",
        "Unser Sommer ist nur ein grün angestrichener Winter, sogar die Sonne muss bei uns eine Jacke von Flanell tragen, wenn sie sich nicht erkälten will. ",
        "England mit seinen Aristokraten geht jetzt immerhin zugrunde, freie Geister haben jetzt im Notfall noch einen besseren Zufluchtsort; würde auch ganz Europa ein einziger Kerker, so gäbe es noch immer ein anderes Loch zum Entschlüpfen, das ist Amerika und gottlob! das ist noch größer als der Kerker selbst. ",
        "Geld ist rund und rollt weg, aber Bildung bleibt. ",
        "So ein bisschen Bildung ziert den ganzen Menschen. ",
        "In der Wissenschaft ist alles wichtig. ",
        "Wahrlich, es gibt Dinge zwischen Himmel und Erde, die nicht bloß unsere Philosophen, sondern sogar die gewöhnlichsten Dummköpfe nicht begreifen. ",
        "Verfolgung der Andersdenkenden ist überall das Monopol der Geistlichkeit. ",
        "Das Christentum - und das ist sein schönstes Verdienst - hat jene brutale germanische Kampflust einigermaßen besänftigt, konnte sie jedoch nicht zerstören, und wenn einst der zähmende Talisman, das Kreuz, zerbricht, dann rasselt wieder empor die Wildheit der alten Kämpfer, die unsinnige Berserkerwut. ",
        "Der Gedanke geht der Tat voraus wie der Blitz dem Donner. [....] Es wird ein Stück aufgeführt werden in Deutschland, wogegen die französische Revolution nur wie eine harmlose Idylle erscheinen möchte. ",
        "Die Fee Morgana, wie würde sie erschrecken, wenn sie etwa einer deutschen Hexe begegnete, die nackt, mit Salben beschmiert, und auf einem Besenstiel, nach dem Brocken reitet. ",
        "Von dem Augenblick an, wo eine Religion bei der Philosophie Hülfe begehrt, ist ihr Untergang unabwendlich. ",
        "Wir Deutschen hassen gründlich, dauernd; da wir zu ehrlich, auch zu unbeholfen sind, um uns mit schneller Perfidie zu rächen, so hassen wir bis zu unserem letzten Atemzug. ",
        "St. Denis ist, wie männiglich weiß, der Schutzpatron der Könige von Frankreich, bekanntlich ein Heiliger, der mit seinem eigenen Kopfe in der Hand dargestellt wird. ",
        "Ärgert dich dein Auge, so reiß es aus, ärgert dich deine Hand, so hau sie ab, ärgert dich deine Zunge, so schneide sie ab, und ärgert dich deine Vernunft, so werde katholisch. ",
        "Altdeutschland, wir weben dein Leichentuch, wir weben hinein den dreyfachen Fluch, wir weben, wir weben. ",
        "Die Handlungen eines Furchtsamen, wie die eines Genies, liegen außerhalb aller Berechnungen. ",
        "Die Religion kann nie schlimmer sinken, als wenn sie solchermaßen zur Staatsreligion erhoben wird. ",
        "Die Verleumdung, das freche Gespenst, setzt sich auf die edelsten Gräber. ",
        "Er sprach mit jener stillen, impertinenten Zurückhaltung, die noch unerträglicher ist als die vollauteste Aufschneiderei. ",
        "Es gibt zwei Sorten Ratten: Die hungrigen und satten. ",
        "Ich habe immer unter Jüdinnen die gesündesten Naturen gefunden, und ich kann es Gott Vater gar nicht verdenken, dass er der bethlehemitischen Maria die Cour und ein Kind gemacht. ",
        "Ich weiß nicht, was soll es bedeuten, Daß ich so traurig bin; Ein Märchen aus alten Zeiten, Das kommt mir nicht aus dem Sinn. ",
        "Ihr könnt Euch darauf verlassen, die Bescheidenheit der Leute hat immer ihre guten Gründe. ",
        "In uns selbst liegen die Sterne unseres Glücks. ",
        "Leise zieht durch mein Gemüt liebliches Geläute. ",
        "Schlage die Trommel und fürchte dich nicht, / und küsse die Marketenderin! / Das ist die ganze Wissenschaft, / das ist der Bücher tiefster Sinn. ",
        "Wenn es den Kaiser juckt, so müssen die Völker sich kratzen. ",
        "Gott wird mir verzeihen, das ist sein Beruf. ",
        "Aus dem alten Testament springe ich manchmal ins Neue, und auch hier überschauert mich die Allmacht des großen Buches. Welchen heiligen Boden betritt hier dein Fuß! Bei dieser Lektüre sollte man die Schuhe ausziehen wie in der Nähe von Heiligtümern. ",
        "Das Geld ist der Gott unserer Zeit und Rothschild ist sein Prophet. ",
        "Es sind in Deutschland die Theologen, die dem lieben Gott ein Ende machen – on n'est jamais trahi que par les siens [verraten wird man nur von seinen Freunden.] ",
        "Den höchsten Begriff vom Lyriker hat mir Heinrich Heine gegeben. Ich suche umsonst in allen Reichen der Jahrtausende nach einer gleich süssen und leidenschaftlichen Musik. Er besass jene göttliche Bosheit, ohne die ich mir das Vollkommne nicht zu denken vermag […] - Und wie er das Deutsche handhabt! Man wird einmal sagen, dass Heine und ich bei weitem die ersten Artisten der deutschen Sprache gewesen sind. ",
        "Der Wohlklang, der Scharfsinn und der Stil - und damit ist schon charakterisiert, was Heines bahnbrechendes Werk von beinahe allen seinen Vorgängern und beinahe allen seinen Nachfolgern unterscheidet. [...]. Ihm ist geglückt, was Europa den Deutschen kaum mehr zutraute: ein Stück Weltliteratur in deutscher Sprache. ",
        "Die Zahl der deutschen Kriegerdenkmäler zur Zahl der deutschen Heine-Denkmäler verhält sich hierzulande wie die Macht zum Geist. ",
        "Es fehlt in Heines Heimat an der Zivilcourage eines offenen Bekenntnisses zu dem Sänger eines neuen Liedes, eines besseren Liedes, um so mehr als dieser die unverzeihliche Sünde begangen hat, als Sohn jüdischer Eltern das Licht der Welt zu erblicken. ",
        "Heine ist von den meisten anderen Dichtern verschieden, weil er alle Scheinheiligkeit verachtet, er zeigt sich stets als der, welcher er ist, mit allen menschlichen Eigenschaften und allen menschlichen Fehlern. ",
            ],
    SKILL_NAME: 'Heinrich Heine Zitate',
    HELP_MESSAGE: 'Sage Ich möchte ein Zitat hören um ein neues Zitat zu hören?',
    HELP_REPROMPT: 'Wie kann ich dir helfen?',
    STOP_MESSAGE: 'Servus!'
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('CitationIntent');
    },
    'GetNewFactIntent': function () {
        this.emit('CitationIntent');
    },
    'CitationIntent': function () {
        // Get a random bonmot
        const citations = answers.CITATIONS;
        const citationIndex = Math.floor(Math.random() * citations.length);
        const randomCitation = citations[citationIndex];

        // Create speech output
        const speechOutput = randomCitation;
        
        // image
       const imageObj = {
            smallImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Heinrich_Heine-Oppenheim.jpg',
            largeImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Heinrich_Heine-Oppenheim.jpg'
        };
        
        this.emit(':tellWithCard', speechOutput, answers.SKILL_NAME, randomCitation, imageObj);
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', answers.HELP_MESSAGE, answers.HELP_MESSAGE);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', answers.STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', answers.STOP_MESSAGE);
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', answers.STOP_MESSAGE);
    },
};

exports.handler = function(event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
