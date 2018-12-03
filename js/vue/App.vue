<template lang="pug">
  mixin share
    .share
      a.item(v-for=`link in shares` :href=`link.url` :class=`link.className` target=`_blank`)
  #global-wrapper(ref=`intro`)
    #header-wrapper
      transition(name="slow-fade")
        .background(:key=`headerBackground.index` :style=`{backgroundImage:'url(' + headerBackground.images[headerBackground.index] + ')'}`)
      .gradient
      .center-wrapper
        .text
          .title Tambay, Takbo
          .description Duterte sees the #[i tambay] as a threat and views the streets as potential for danger. For a street child, the danger is not found on the streets, but in the institutions that claim to protect them.
          .credits Written by Soleil Luna and Loreben Tuquero
          +share
    #navigation-wrapper(ref=`nav-wrapper`)
      .fixed-wrapper(:class=`{fixed:navigation.fixed}`)
        .nav-item(v-for=`nav, i in navigation.items` @click=`navigateTo(nav)` :class=`{selected:nav.selected}`) {{nav.label}}
    #introduction-wrapper
      .article-text.center-wrapper
        <p dir="ltr"> In June of this year, Duterte launched yet another anti-criminality campaign in the form of the crackdown against tambays. Multiple institutions and authorities came to the fore of this directive, apprehending loiterers that violate city ordinances. </p> <p dir="ltr"> But what of the minors who have found a home in the streets and automatically violate curfew laws? Where should they go? </p>
    #simulation-wrapper(ref=`simulation`)
      transition(name="fade")
        .scene-background(:key=`sbg.id` v-if=`sbg.media_type == 'image'` :style=`{backgroundImage:'url(' + sbg.media_url + ')'}`)
          .gradient
        .scene-background(:key=`sbg.id` v-if=`sbg.media_type == 'video'`)
          video(loop="" muted="" autoplay="")
            source(:src=`sbg.media_url` type="video/mp4")
          .gradient
      .scene(
        v-for=`(scene, index) in simulation.storyline`
        :ref=`'scene-' + scene.id`)
        .center-wrapper
          transition(name="fade")
            .top-line(v-if=`index != 0`)
              .line
              .circle
          transition(name="fade")
            .bottom-line(v-if=`index != simulation.storyline.length - 1`)
              .circle
              .line
          .title {{scene.title}}
          .text(v-for=`t in scene.text`) {{t}}
          .question {{scene.question}}
          .options

            .option(
              v-for=`option in scene.options`
              @click=`selectOption(scene, option)`
              :class=`{selected: simulation.storyline[index + 1] && option.id == simulation.storyline[index + 1].id}`
              @mouseover=`optionMouseOver(option)`
              @mouseout=`optionMouseOut()`
              v-html=`option.label`)
    #article-wrapper(ref=`article`)
      .article-text.center-wrapper
        blockquote Eighteen and below are minors. You take them into custody not to arrest them, but for their own safety, to protect them.

        <p dir="ltr"> These were the <a href="https://www.rappler.com/nation/205804-duterte-loitering-minors-taken-into-custody-own-safety" > words </a> of President Rodrigo Duterte after giving the directive last June to “go after tambays,” citing a threat to public safety and security in loiterers that can commit street crimes. </p> <p dir="ltr"> Since the Revised Penal Code does allow for loiterers, the PNP has resolved to be more strict in arresting those who commit violations of ordinances instead. </p> <p dir="ltr"> Consequently, an intensified campaign against loiterers ensued, one that apprehended <a href="https://www.rappler.com/newsbreak/iq/208443-numbers-statistics-anti-tambay-loiterers-campaign-philippines" > 78,359 Metro Manila residents </a> in the first six weeks following the directive. </p> <p dir="ltr"> This approach has taken a toll on minors, especially on street children that regularly break curfew when taking to the streets in place of a home. At the end of July, Rappler reported 11,191 minors apprehended for violating curfew hours, comprised of those “who are caught staying late in computer shops and children who are ordered by their elders to buy from their neighborhood sari-sari stores.” </p> <p dir="ltr"> Duterte’s directive to take custody of minors was addressed to the police, the Department of Social Welfare and Development (DSWD), and local government units. </p> <p dir="ltr"> However, since Duterte’s pronouncement, Metro Manila Chief Superintendent Guillermo Eleazar has <a href="https://www.rappler.com/newsbreak/iq/208443-numbers-statistics-anti-tambay-loiterers-campaign-philippines" > addressed </a> the insufficient space for detention, thereby ordering policemen to issue a warning only to first-time offenders in place of immediate fines. </p> <p dir="ltr"> Therefore, as reported, loiterers are “usually sent home by cops as most police stations have no rescue facilities.” </p> <p dir="ltr"> Apparently, such is not the case for street children. Last July, the Manila Standard <a href="http://manilastandard.net/news/national/270107/more-minors-roam-streets-violate-curfew-laws-police-say.html" > reported </a> Pasay and Paranaque City as having the highest apprehension rate in the southern part of Metro Manila. More specifically, the Manila Bulletin <a href="https://news.mb.com.ph/2018/07/03/5900-violators-of-city-ordinances-rounded-up-by-spd-from-june-13-to-july-2/" > reported </a> 283 minors rescued in Pasay City and 631 minors apprehended in Paranaque City from June 13 to July 2. </p> <p dir="ltr"> So how exactly do policemen and other authorities go about in apprehending street children? Based on interviews with four children who have been apprehended during the time of the anti-tambay operations, the system that is meant to protect them is not only insufficient and ineffective, but can ultimately harm and traumatize them even more. </p> <p dir="ltr"> The following narratives were told by street children apprehended during these operations, during interviews facilitated by social workers. The researchers were told that their stories may be inconsistent due to their age and memory, so these were corroborated with the social workers’ version of events as told to them by authorities involved in the minors’ cases. The names of the minors have been changed to protect their identities. </p> <p dir="ltr"> Vince, Mina, Tess, and Simon were all held in custody, for a period of time ranging from one night to even one week, even if it was their first time being apprehended. They were passed along from one institution to another, thereby being shuttled from one “shelter” to another, until one would take them in. </p> <p dir="ltr"> Curfew ordinances vary across different locales in Metro Manila, with first offense penalties ranging from a warning, a fine, community service or else just being recorded and kept in custody overnight to be released in the morning. Nowhere does it say that curfew violators can be kept in custody for more than a week. </p> <p dir="ltr"> 16-year old Vince was apprehended and confined in a shelter for a week. He is a tambay, no doubt, for he roams the streets every day. He and his friends usually loiter outside a KFC branch or outside the NAIA terminal, selling small goods or else begging for money from balikbayans coming out of the airport. </p> <p dir="ltr"> Vince is comfortable in these areas because they are where he grew up in. On the night of August 9, however, his friends, suggested going to another locale for a change. Not wanting to miss out, he followed them. </p> <p dir="ltr"> They ended up in an abandoned house in a barangay in Sucat. It was night time, and Vince thought that the house could be haunted due to neglect. </p> <div> <br/> </div>

        blockquote [Tumataas] na po ‘yung balahibo ko, kinakabahan po ako, parang may mangyayaring hindi maganda.

        <p dir="ltr"> ([I] got goosebumps, I got scared, I felt that something bad was going to happen.) </p> <p dir="ltr"> Vince really wanted to leave the place. As proved moments later, his hunches were right. </p> <p dir="ltr"> It was an “operation,” as Vince and other street kids called them. “Mga nanghuhuli ng palaboy,” (Those who capture [street dwellers]) usually associated with DSWD workers. </p> <p dir="ltr"> According to Vince, a man saw them staying in the building and communicated this via radio to his companions. “Doon nalang po namin alam na may mga pulis na, parang niraid po kami,” (That was when we knew the police were here. They raided the place) recounted Vince. </p> <p dir="ltr"> At one point, some policemen and barangay officials busted into the building, accusing them of using drugs. </p> <p dir="ltr"> “’Yung iba sa’min pinadila pero ‘di naman po sila pina-medical; ‘di sila drinug-test pero wala pa rin po silang katibayan,” (Some of us were asked to [stick out our tongues]; we weren’t asked to take any tests, so they don’t have proof.) </p> <p dir="ltr"> Vince stated that the authorities planted a 29” knife on one of his companions, who is 19 years old. </p> <p dir="ltr"> Thus, Vince and his friends were taken to Bahay Pag-asa in Paranaque. </p> <p dir="ltr"> According to Republic Act No. 10630 (2012), Bahay Pag-asa is an institution that provides temporary residential care for children in conflict with the law who are awaiting court disposition of their cases or transfer to other agencies or jurisdiction. </p> <p dir="ltr"> Bahay Pag-asa takes custody of children in conflict with the law. However, according to Sec. 57-A of the same document, children who commit curfew violations are to be recorded as “children at risk,” and will not be imposed any penalty. Instead, they are to be brought to their residence or to their respective barangay hall/official to be released to their parents’ custody. </p> <p dir="ltr"> But Vince was not immediately brought back to his family, and could not even be brought back to his family because they lived in the province. </p> <p dir="ltr"> “Mahirap ang buhay, (Life was hard)” Vince said, when asked about how his experience in custody was. Meals were served late, and were often not healthy enough, Vince said. They were not given mineral water, instead they were made to drink from the very water outlets they showered from. Some children did not sleep on mattresses, and some were made to sleep on the floor. </p> <p dir="ltr"> Although Vince said that he enjoyed the company of the other children in custody, he added that they had their vices, specifically how they managed to sneak in cigarettes through fellow people in custody termed “katiwala.” These were the grown ones in custody who served them food and could be ordered to buy goods for the other kids. </p> <p dir="ltr"> “Inuutusan nila ng tropa nila bumili ng isang kaha, pinapasok nila…Tinatago po nila, kahit po may CCTV [sa bawat dorm.]” </p> <p dir="ltr"> (Their friends order them to buy a pack of cigarettes and they sneak it in...They manage to hide it even if there is a camera in every dorm division.) </p> <p dir="ltr"> This kind of indifference from social workers seemed to turn into negligence and even hostility in some cases. Vince says some of them get angry at some children, but seemed to favor others. </p> <p dir="ltr"> “Parang palakasan po ng kapit dun sa mga social worker na mapapalibre ka ng mga kape. Mabubusog ka lang po dun at tataba ka kung araw-araw may dalaw ka na pamilya mo.” (You had to pull the strings and get close to the social workers in order to get free coffee. The only way for you to eat well and to gain weight is if you are visited every day by your family.) </p> <p dir="ltr"> Due to the nature of his apprehension, a case was not imposed. “Bagansya lang naman po, wala po kaming kaso eh. Curfew lang po, isang linggo,” said Vince. </p> <p dir="ltr"> However, Vince also addresses another instance of favoritism within this shelter. “Depende naman po ‘yan sa mga social worker kasi mayroon pong ibang DSWD na kahit bagansya minsan buwan na, ” he said. </p> <p dir="ltr"> Vince said that he and the others were released after a week and even personally escorted to their homes, but he did not specify which place he considers as his home, for he often stays on the streets or with his friends. </p> <p dir="ltr"> When you’re a street child, you develop an instinct that foretells when authorities are approaching. Vince expressed this when he narrated how he felt while he and his friends were in the abandoned building, somehow knowing that something bad was about to happen. </p> <p dir="ltr"> For Mina, a 17-year old girl who also roams the streets at night, the usual flight response to this instinct has been lost, replaced by a tendency to freeze whenever she hears barangay officials making their rounds. </p> <p dir="ltr"> This was because she was traumatized by how she was apprehended by a police officer. </p>

        blockquote Hinawakan [ako rito], ang higpit nga po eh. Dahil doon na-trauma po ako. . .After po nun kapag may nakita na po akong ilaw tapos sasabihin nila pulis, nanginginig na po ako sa takot. Napapaiyak na lang po ako.

        <p dir="ltr">(I was grasped here, it was really painful. I was traumatized because of that. After that, whenever I would see headlights and be told that the police was coming, I would just tremble in fear. I would start crying.) </p><p dir="ltr">Prior to the incident, Mina recounted how she and her friends would always know when a police mobile was approaching. The glow of its headlights would send them scampering out of sight.</p><p dir="ltr">But one night, Mina had forgotten about the operations. She had only went out to buy diapers for her niece, when a cop grabbed her tightly by the wrist and asked for her age. Mina replied, “17,” and the police officer commanded,“Sakay.” (Get on.)</p><p dir="ltr">Mina had no choice but to follow him. She was brought to the precinct, and was recorded as a curfew violator along with the rest of the minors.</p><p dir="ltr">One may ask: why are these children tambays in the first place? Where are their families? According to Jeff Ruaza, a social worker with ACAP, the street children they cater are sometimes victims of abuse within their families.</p><p dir="ltr">He tells the story of two ACAP beneficiaries who they referred to stay in other shelters instead of their homes. </p><p dir="ltr">“Parang hindi possible o hindi siya recommended [as per] my assessment na bumalik sa pamilya ng bata dahil ‘yung pamilya mismo - parang si mama kapag ‘di nakakuha ng pera para sa pamilya, nagwawala, nagagalit sa mga anak. Si tatay naman kapag naglasing, ayun din nagiging abusive sa kanyang mga anak. Nananakit, nag-aaway sila, at ‘yung nangyayari sa mga anak nila umaalis ng bahay. Ayaw nilang makita ‘yung sitwasyon nila sa loob ng bahay na may nag-aaway at nasasaktan sila dahil may sitwasyon na hindi katanggap-tanggap sa part ng pamilya.”</p><p dir="ltr">(It was not possible or recommended as per my assessment that they go back to their families because the family itself - when the mother can’t earn money, she throws a tantrum and gets angry at her children. Meanwhile, the father gets abusive when he is intoxicated. He hurts them, fights them, and so the children leave the house. They do not want to see the situation inside their house wherein they get hurt because the situation in the family is not acceptable.)</p><p dir="ltr">Mina expresses her and her siblings’ discontentment with their mother, which causes them to seek comfort outside of their home. “Aminado po kami na si mama po minsan napapabayaan kami dahil sa pagkalubog po sa bisyo. Gumagamit po [siya] ng shabu.” (We admit that our mother abandons us sometimes because of her addiction. She consumes shabu.)</p><p dir="ltr">According to Mina, her mother is often out of their house because of her involvement with the shabu trade, therefore neglecting the children.</p><p dir="ltr">Her father, on the other hand, is currently in jail. He was also involved in the drug trade.</p><p dir="ltr">In addition, some families of minor loiterers refuse to pick them up from shelters, because they think they will be better off there rather than in their own homes.</p><p dir="ltr">“‘[Hayaan] mo na dun para magbago.’ [Kapag] nandito kasi sa labas mga nagiging pariwara ‘yun kaya hinahayaan nalang nila dun, (Leave them there so that they can change. If they stay here out of the shelter, they will lose their way, so just let them stay there)” said Mina, referring to how parents or family members with their own vices would refuse to pick up their children at the shelter.</p><p dir="ltr">In addition to societal discrimination and a sense of abandonment from their families, minor loiterers also experience being discriminated against in the very shelters they are brought to during rescue operations.</p><p dir="ltr">Mina recounts how the Bahay Pag-asa staff would express disdain towards the minors who were brought in for violating curfew, saying “sasusunod, ’wag na kayong magpahuli.”</p><p dir="ltr">“Nagagalit nga daw po sila sa mga nacucurfew na bata tas dun po binabagsak kasi ang budget lang po talaga nila para sa mga batang gustong magbago... Wala daw po silang pakialam sa mga nacurfew po…wala naman daw po silang budget para palamunin.”</p><p dir="ltr">(They get angry at children who violate curfew and complain why they get taken to their shelter, when their budget is for the children who want to change. They said they do not care about curfew violators for they do not have the budget to feed them.)</p><p dir="ltr">This harkens back to how Vince perceived the Bahay Pag-asa social workers as people who display favoritism, negligence, and hostility.</p><br/><p dir="ltr">Mina’s sister on the other hand, although another tambay, has never been taken into custody. However, her friends have been apprehended, and she tells their stories of being tricked into detention and being abandoned by their family.</p><p dir="ltr">Vince and Tess talk of one of their friends, Simon, who has been taken into custody multiple times already. Simon is 13 years old.</p>

        blockquote Matagal bago siya makalaya kasi hindi na raw siya tatambay ‘pag kinuha siya ng mama niya, pero tumatambay pa rin siya, tumatakas sa kanila.

        <p dir="ltr"> They also talk of their friend Gerald, who has also been abandoned by his father, making him stay at the shelter for longer than necessary. </p> <p dir="ltr"> In these cases, where will they go? </p> <p dir="ltr"> Ana Lynn Lomibao, an officer of the Barangay Council for the Protection of Children in Talipapa, Novaliches, said she cannot do much other than to return these children to their families. But she notices the familiar faces. She sympathizes. </p> <p dir="ltr"> “Kahit na nga sabihin mo ‘yung meron ditong community service, wala ‘di na ako nag-gaganun. Kasi basta ako, kapag [narescue ko na] sila, ‘yung sarili ko nilalagay ko rin sa sarili nila, para malaman na sinasabi ko na dumaan din ako ng pagkabata,” she said. Although her sympathy is not the only reason she does not impose the offenses. In addition, she is not given the resources to do so in the first place. </p> <p dir="ltr"> She was told that she needed to have a ticketing system for offenses and fines, but she was never officially given any subsequent instructions on how and where to acquire one. As a result, she just takes down records of offenders and either lets them go or turns them over to another institution. </p> <p dir="ltr"> Moreover, Ana Lynn talks to them and tries to understand. “Base sa mga na-interview ko sa kanila, karamihan talaga diyan sa mga paulit-ulit na ‘yan talagang mga broken family. Hindi na nag-aaral, [o kung] nag-aaral, ayaw naman mag-aral. Kadalasan talaga na-babarkada.” (Based on my interviews with them, most of the children apprehended repeatedly come from broken families. They do not study anymore, or if they do, they do not want to. They fall deeper into their friends’ habits or gangs.) </p> <p dir="ltr"> Her statement sums up the experience and the most common characteristics of the tambay who is a minor. Poverty and abuse push the child to seek a safe space, and because they rarely find it at home and at school, they create their own spaces in the streets where they can be with each other. </p> <p dir="ltr"> Duterte said that his crackdown against tambays will continue unless the Supreme Court deems it unconstitutional. Based on these narratives, it is apparent that some human rights of the children are being violated, as well as other Philippine laws and policies. </p> <p dir="ltr"> These violations were outlined in a <a href="https://philippinehumanrights.org/news/11-statements/30-statement-against-arbitrary-arrest-of-minors-under-oplan-tambay" > statement </a> cosigned by 21 non-government organizations, entitled “Statement Against Arbitrary Arrest of Minors Under ‘Oplan Tambay.’” It was released around three weeks after Duterte’s directive, and it already highlighted how the whole campaign could be deemed unconstitutional. </p> <p dir="ltr"> The statement stressed different causes for concern regarding the program, including 1) how criminalising children can be detrimental to their development, 2) how the program is ineffective in addressing structural inequalities, 3) the insufficient safeguards and inadequate facilities for the custody of children, 4) violations of Philippine laws and policies, and 5) violation of children’s rights. </p> <p dir="ltr"> Ultimately, these organizations call on the government to release children from conditions that threaten their wellbeing and to establish a system wherein children and their families/guardians can raise concerns about their custody. </p> <p dir="ltr"> Furthermore, they appeal to the administration to require institutions who shelter children to meet the minimum standards for DSWD’s accreditation and to re-establish the National Network for Street Children and develop a National Plan of Action for Children in Street Situations. </p> <p> The campaign against tambays is one that impinges on the rights of homeless, poor, and abandoned children. In their circumstances, they cannot help but run, but they do not know where to go. How can we claim to protect children in a place where they do not feel safe? </p>

    #footer-wrapper
      .center-wrapper
        +share
        .title Tambay, Takbo
        .line Written by Soleil Luna and Loreben Tuquero
        .line Special thanks to Action for the Care and Development of the Poor in the Philippines
        .line Designed and developed by #[a(href="https://mikedc.io") Mike del Castillo]
</template>

<script>
const utils = require('../utils');

console.log(utils);
export default {
  data(){
    return {
      headerBackground: {
        index: 0,
        images: [
          'img/header.jpeg',
          'img/slideshow/1.jpeg',
          'img/slideshow/2.jpeg',
        ]
      },
      shares: [
        {
          className: {facebook:1},
          url: "https://www.facebook.com/sharer/sharer.php?u=tambaytakbo.com",
        },
        {
          className: {twitter:1},
          url: "https://twitter.com/home?status=VIEW%3A%20Tambay,%20Takbo%20(tambaytakbo.com)",
        },
      ],
      navigation: {
        fixed: false,
        items: [
          {
            ref: 'intro',
            label: 'Intro',
            selected: false,
          },
          {
            ref: 'simulation',
            label: 'Simulation',
            selected: false,
          },
          {
            ref: 'article',
            label: 'Article',
            selected: false,
          },
        ],
      },
      simulation: {
        scenes: [],
        background: null,
        hover: null,
        storyline: [],
      },
    }
  },
  computed: {
    sbg(){
      if(this.simulation.hover) return this.simulation.hover;
      if(this.simulation.background) return this.simulation.background;
      return {
        id: 0,
        media_type: 'none',
      };
    },
  },
  methods: {
    changeHeaderBackground(){
      this.headerBackground.index = (this.headerBackground.index + 1) % this.headerBackground.images.length;
    },
    scrollHandler(){
      let scroll = window.scrollY || window.pageYOffset;

      let navWrapperY = utils.getOffsetTop(this.$refs['nav-wrapper']);

      this.navigation.fixed = scroll >= navWrapperY;

      let navs = this.navigation.items;
      let buffer = window.innerHeight/2;

      navs.forEach(n => n.selected = false);
      for(let i = 0; i < navs.length - 1; i++){
        let n1 = navs[i + 0];
        let n2 = navs[i + 1];

        let e1 = this.$refs[n1.ref];
        let e2 = this.$refs[n2.ref];

        let y1 = utils.getOffsetTop(e1);
        let y2 = utils.getOffsetTop(e2);

        if(i == 0 && scroll <= y1){
          n1.selected = true;
          break;
        } else if(scroll >= y1 - buffer && scroll < y2 - buffer){
          n1.selected = true;
          break;
        } else if(i == navs.length - 2){
          n2.selected = true;
          break;
        }
      }

      let simY = utils.getOffsetTop(this.$refs.simulation);
      let simHeight = window.innerHeight * this.simulation.storyline.length;
      let simScroll = scroll + window.innerHeight/2;

      if(simScroll >= simY && simScroll <= simY + simHeight){
        let index = Math.min(this.simulation.storyline.length - 1, Math.floor((simScroll - simY) / window.innerHeight));
        this.simulation.background = this.simulation.storyline[index];
      } else{
        this.simulation.background = null;
      }

    },

    navigateTo(nav){
      let el = this.$refs[nav.ref];
      if(nav.ref == "simulation"){
        el = this.$refs[`scene-${this.simulation.storyline[this.simulation.storyline.length - 1].id}`][0];
      }
      utils.scrollTo(utils.getOffsetTop(el));
    },

    resetStoryline(){
      this.simulation.storyline = [];
      this.simulation.storyline.push(this.findScene('start'));
    },

    optionMouseOver(option){
      this.simulation.hover = this.findScene(option.id);
    },

    optionMouseOut(){
      this.simulation.hover = null;
    },

    loadScenes(){
      this.$http.get("https://script.google.com/macros/s/AKfycbwpdlB26nqSREiXGTYqghBfrBgDz0deaUa3Dyy36-GxKMIEiFRt/exec")
      .then(({data}) => {
        this.simulation.scenes = data;
        this.resetStoryline();
      })
      .catch(() => {
        this.loadScenes();
      })
      .then(() => {});
    },

    findScene(id){
      return this.simulation.scenes.find(scene => id == scene.id);
    },

    selectOption(scene, option){
      //read, again

      if(option.id == 'read'){
        return this.navigateTo(this.navigation.items.find(n => n.ref == 'article'));
      }

      if(option.id == 'again'){
        this.resetStoryline();
        return this.navigateTo(this.navigation.items.find(n => n.ref == 'simulation'));
      }

      if(this.simulation.storyline[this.simulation.storyline.length - 1] == scene){
        let nextScene = this.findScene(option.id);
        this.simulation.storyline.push(nextScene);
        this.$nextTick(() => {
          let el = this.$refs[`scene-${nextScene.id}`][0];
          utils.scrollTo(utils.getOffsetTop(el));
        });
      }
    }
  },
  mounted(){
    window.$app = this;
    this.loadScenes();

    window.addEventListener('load', this.scrollHandler.bind(this), false);
    window.addEventListener('scroll', this.scrollHandler.bind(this), false);
    window.addEventListener('mousewheel', this.scrollHandler.bind(this), false);
    window.addEventListener('wheel', this.scrollHandler.bind(this), false);
    window.addEventListener('keypress', this.scrollHandler.bind(this), false);
    window.addEventListener('resize', this.scrollHandler.bind(this), false);
    window.addEventListener('touchstart', this.scrollHandler.bind(this), false);
    window.addEventListener('touchend', this.scrollHandler.bind(this), false);
    window.addEventListener('touchmove', this.scrollHandler.bind(this), false);

    this.changeHeaderBackground();
    setInterval(this.changeHeaderBackground.bind(this), 5000);
  },
}
</script>

<style lang="sass">

</style>
