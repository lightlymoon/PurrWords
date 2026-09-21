const VOCAB = [
  { word: "A built-in animal aggression instinct", meaning: "inborn aggressive tendency", explanation: "An instinctive tendency towards aggression that is considered by some theories to have evolutionary origins.", example: "Some theories propose that aggression may partly reflect a built-in animal instinct." },
  { word: "A fine = to pay money as a punishment", meaning: "financial punishment", explanation: "A fine is a monetary penalty imposed for breaking a law or regulation.", example: "The company received a substantial fine for violating environmental regulations." },
  { word: "A genetic need", meaning: "biologically determined need", explanation: "A need or requirement that is thought to be influenced by biological or genetic factors.", example: "Researchers have investigated whether certain behaviours reflect a genetic need for social connection." },
  { word: "A harsh punishment", meaning: "severe penalty", explanation: "A punishment that is particularly severe, strict, or difficult for the offender.", example: "Some critics argue that a harsh punishment does not always prevent future crime." },
  { word: "A number of initiatives have been set up", meaning: "several programmes were created", explanation: "This expression means that several organised programmes, actions, or projects have been established to achieve particular objectives.", example: "A number of initiatives have been set up to encourage girls to study engineering." },
  { word: "A preoccupation with happiness", meaning: "excessive focus on happiness", explanation: "An unusually strong or excessive concern with achieving or maintaining happiness.", example: "A preoccupation with happiness may cause people to view ordinary negative emotions as failures." },
  { word: "A primal urge", meaning: "basic instinctive desire", explanation: "A powerful, fundamental instinct or desire associated with basic human or animal behaviour.", example: "The desire for safety can be understood as a primal urge shared across cultures." },
  { word: "A prison sentence (imprisonment)", meaning: "time spent in prison", explanation: "A period during which a person is legally required to remain in prison as punishment for a crime.", example: "The court imposed a lengthy prison sentence for the serious offence." },
  { word: "A remnant of our ancient animal ways", meaning: "leftover evolutionary behaviour", explanation: "A characteristic or behaviour that remains from an earlier stage of human or animal evolution.", example: "Some instinctive reactions may be a remnant of our ancient animal ways." },
  { word: "A repeat offender", meaning: "person committing crime again", explanation: "A person who has committed an offence more than once.", example: "The court imposed a stricter sentence because the defendant was a repeat offender." },
  { word: "A serial criminal", meaning: "repeated criminal", explanation: "A criminal who repeatedly commits crimes, often of the same or a similar type.", example: "The police investigation eventually identified the suspect as a serial criminal." },
  { word: "Abduction", meaning: "illegal taking of a person", explanation: "The act of taking someone away against their will, usually by force or threat.", example: "The police launched a major investigation following the reported abduction." },
  { word: "Aboriginal People", meaning: "earliest inhabitants", explanation: "People who inhabited a particular land from the earliest known period, especially before the arrival of colonists.", example: "Policies affecting Aboriginal People have had long-term social and cultural consequences." },
  { word: "Adaptive", meaning: "able to adjust", explanation: "Able to change or adjust effectively in response to different environmental conditions or circumstances.", example: "Adaptive behaviour can increase an organism's chances of surviving environmental change." },
  { word: "Adaptive traits", meaning: "traits aiding survival", explanation: "Characteristics that improve an organism's ability to survive and reproduce in a particular environment.", example: "Camouflage is an example of an adaptive trait in many animal species." },
  { word: "Adventurer/Explorer", meaning: "person who explores", explanation: "A person who travels to unfamiliar places to discover or learn about them.", example: "The explorer documented several previously unknown geographical features." },
  { word: "Adventurers/Explorers/Voyagers/Colonisers/Settlers", meaning: "people travelling to new lands", explanation: "A group of terms describing people who travel, explore, settle, or establish control in unfamiliar territories.", example: "Historical records describe how explorers and settlers interacted with Indigenous communities." },
  { word: "Alternative fuels", meaning: "non-traditional fuels", explanation: "Energy sources used instead of conventional fossil fuels, including electricity, hydrogen, and biofuels.", example: "Governments are investing in alternative fuels to reduce carbon emissions." },
  { word: "An age-old debate / a long-running debate", meaning: "very old continuing debate", explanation: "A discussion or disagreement that has existed or continued for a very long period.", example: "The relationship between wealth and happiness is an age-old debate." },
  { word: "An instinct which evolved as an advantageous trait/characteristic", meaning: "evolved useful instinct", explanation: "An instinctive behaviour that developed through evolution because it provided an advantage for survival or reproduction.", example: "Some protective behaviours may be instincts that evolved as advantageous characteristics." },
  { word: "Armed police", meaning: "police carrying firearms", explanation: "Police officers who are equipped with firearms, usually for situations involving serious threats.", example: "Armed police were deployed to protect the public during the high-risk operation." },
  { word: "Arson", meaning: "intentional property fire", explanation: "The deliberate act of setting fire to a building, vehicle, or other property.", example: "The building was destroyed in an apparent case of arson." },
  { word: "Assault", meaning: "physical attack", explanation: "A physical attack or act of violence against another person.", example: "The victim reported the assault to the police immediately." },
  { word: "Attempted murder", meaning: "attempt to kill", explanation: "An unsuccessful attempt to deliberately kill another person.", example: "The defendant was charged with attempted murder after the victim survived the attack." },
  { word: "Balancing responsibilities", meaning: "managing different duties", explanation: "The process of managing responsibilities in different areas of life, particularly work and family commitments.", example: "Balancing responsibilities can be challenging for people with demanding careers." },
  { word: "Biological make-up", meaning: "biological characteristics", explanation: "The genetic and biological characteristics that make up an individual's physical and physiological condition.", example: "A person's biological make-up can affect how they respond to environmental conditions." },
  { word: "Biological/psychological/sociocultural approach", meaning: "three explanatory perspectives", explanation: "Approaches that explain human behaviour through biological processes, psychological factors, or social and cultural influences.", example: "A biological, psychological, and sociocultural approach provides a broader understanding of human behaviour." },
  { word: "Bring up/grow up", meaning: "raise or mature", explanation: "To bring up means to raise a child, while to grow up means for a child to develop into an adult.", example: "Parents bring up children, whereas children grow up within particular social environments." },
  { word: "Burglary", meaning: "illegal entry for crime", explanation: "The illegal entry into a building, usually with the intention of committing a crime such as theft.", example: "The number of reported burglaries decreased after the security system was installed." },
  { word: "Bypasses/Ringroads", meaning: "roads around urban areas", explanation: "Roads constructed around towns or cities to divert traffic away from central areas.", example: "The new bypass reduced the amount of heavy traffic passing through the town centre." },
  { word: "Car pool", meaning: "shared car travel", explanation: "A system in which several people share one car for regular journeys, usually to reduce costs and traffic.", example: "A car pool can reduce both commuting expenses and the number of vehicles on the road." },
  { word: "Car share schemes", meaning: "shared car programmes", explanation: "Programmes that allow or encourage people to share cars in order to reduce costs, traffic, or environmental impact.", example: "Car share schemes can reduce the number of vehicles travelling into city centres." },
  { word: "Car share schemes/incentives", meaning: "rewards for sharing cars", explanation: "Programmes or financial benefits designed to encourage people to share vehicles and reduce the number of cars on roads.", example: "Car share schemes and incentives can help reduce urban traffic." },
  { word: "Carpool", meaning: "shared regular journey", explanation: "An arrangement in which people share a vehicle for a regular journey, often taking turns to drive.", example: "Employees formed a carpool to reduce their commuting costs." },
  { word: "Characteristics/traits", meaning: "qualities or features", explanation: "Features or qualities that describe a person, organism, or object and may be inherited or acquired.", example: "Certain personality traits may develop through a combination of genetic and social influences." },
  { word: "Cheaper public transport", meaning: "lower transport costs", explanation: "A reduction in the price of public transportation intended to make it more affordable and attractive.", example: "Cheaper public transport could encourage people to leave their cars at home." },
  { word: "Child abuse", meaning: "harm to a child", explanation: "Physical, emotional, or sexual mistreatment or neglect directed towards a child.", example: "Governments must establish effective systems for preventing child abuse." },
  { word: "Circumstances of the crime", meaning: "conditions surrounding a crime", explanation: "The specific conditions, events, and factors connected with the commission of a crime.", example: "The judge considered the circumstances of the crime before determining the sentence." },
  { word: "Colonisers/Settlers", meaning: "people establishing control or settlement", explanation: "People or groups who settle in another territory and may establish political control over the land and its inhabitants.", example: "The arrival of colonisers and settlers transformed the region's demographic and political structure." },
  { word: "Community service", meaning: "unpaid public work", explanation: "Unpaid work performed for the benefit of the community, sometimes imposed as an alternative to imprisonment.", example: "The court ordered the offender to complete community service." },
  { word: "Congestion", meaning: "heavy traffic", explanation: "A situation in which an area, especially a road, becomes overcrowded and movement is slowed or blocked.", example: "Traffic congestion is a major problem in many rapidly growing cities." },
  { word: "Conventionally managed forests", meaning: "traditionally managed forests", explanation: "Forests managed according to established or traditional methods, often involving human intervention for production or conservation.", example: "Conventionally managed forests may require regular intervention to maintain timber production." },
  { word: "Conviction / Verdict", meaning: "formal court decision", explanation: "A conviction is a formal finding that someone is guilty, while a verdict is the official decision reached in a trial.", example: "The conviction was based on substantial evidence presented during the trial." },
  { word: "Corporal punishment", meaning: "physical punishment", explanation: "Physical punishment used as a form of discipline.", example: "Many education systems have banned corporal punishment in schools." },
  { word: "Court", meaning: "place for trials", explanation: "A legal institution or place where cases are heard and judicial decisions are made.", example: "The case was brought before a court after the investigation was completed." },
  { word: "Crime", meaning: "illegal act", explanation: "An action or activity that violates the law.", example: "Governments use various strategies to prevent crime and protect communities." },
  { word: "Crime prevention", meaning: "stopping crime", explanation: "Measures and strategies designed to prevent criminal activities from occurring.", example: "Effective crime prevention often requires cooperation between authorities and local communities." },
  { word: "Crime/Criminal", meaning: "crime or offender", explanation: "Crime refers to an illegal act, while criminal refers to a person who commits such an act.", example: "The study examines both the causes of crime and the behaviour of criminals." },
  { word: "Criminal", meaning: "person committing crime", explanation: "A person who commits an illegal act or has been convicted of a crime.", example: "The criminal was eventually identified through forensic evidence." },
  { word: "Cultural norms", meaning: "shared cultural expectations", explanation: "Common customs, beliefs, and behavioural expectations that are considered normal within a particular community.", example: "Cultural norms influence how people communicate, work, and form relationships." },
  { word: "Cultural variation", meaning: "differences between cultures", explanation: "Differences in beliefs, customs, values, and behaviours among different cultural groups.", example: "Cultural variation can affect attitudes towards education and family life." },
  { word: "Culture", meaning: "shared way of life", explanation: "The customs, beliefs, values, arts, and ways of living shared by a group of people.", example: "Culture strongly influences how people communicate and understand the world." },
  { word: "Cycle lanes", meaning: "lanes for cyclists", explanation: "Special sections of roads designed specifically for people travelling by bicycle.", example: "Expanding cycle lanes could encourage more people to commute by bicycle." },
  { word: "Defence", meaning: "legal representation", explanation: "The lawyer or legal argument representing and protecting a person accused of a crime.", example: "The defence argued that the evidence was insufficient." },
  { word: "Defendant", meaning: "person accused in court", explanation: "A person or organisation formally accused of an offence in a court of law.", example: "The defendant denied all allegations made against them." },
  { word: "Detention", meaning: "remaining as punishment", explanation: "A punishment in which a student is required to remain at school after normal hours.", example: "The student received detention for repeatedly breaking school rules." },
  { word: "Diminished responsibility", meaning: "reduced legal responsibility", explanation: "A legal concept in which certain circumstances reduce the degree to which a person can be held fully responsible for their actions.", example: "The defence argued that diminished responsibility should be considered by the court." },
  { word: "Discrimination", meaning: "unfair treatment", explanation: "Unfair treatment of a person or group based on characteristics such as sex, race, religion, or other personal attributes.", example: "Discrimination in the workplace can have serious social and economic consequences." },
  { word: "Drug trafficking", meaning: "illegal drug trade", explanation: "The illegal production, transportation, distribution, import, or export of drugs.", example: "International cooperation is necessary to combat drug trafficking." },
  { word: "Drunk driving", meaning: "driving under alcohol influence", explanation: "Operating a vehicle while affected by alcohol to a level that makes driving unsafe or illegal.", example: "Strict laws against drunk driving can help reduce road accidents." },
  { word: "Empower women", meaning: "increase women's power", explanation: "To give women greater confidence, resources, opportunities, and ability to make decisions and achieve their goals.", example: "Educational programmes can empower women by providing skills and economic opportunities." },
  { word: "Environmental factors", meaning: "outside influences", explanation: "External conditions such as upbringing, culture, social circumstances, and surroundings that can affect development and behaviour.", example: "Environmental factors can significantly influence educational achievement." },
  { word: "Equal opportunities", meaning: "same chances", explanation: "The principle that people should have the same opportunities regardless of characteristics such as sex, race, or religion.", example: "Educational institutions should provide equal opportunities to students from different backgrounds." },
  { word: "Equal pay", meaning: "same pay for same work", explanation: "The principle that people should receive the same remuneration for the same or equivalent work regardless of gender.", example: "Equal pay for comparable work remains an important workplace issue." },
  { word: "Equal rights", meaning: "same legal rights", explanation: "The principle that people should have the same fundamental rights and legal treatment.", example: "Equal rights are an important principle of modern democratic societies." },
  { word: "Equal status", meaning: "same social position", explanation: "Having the same level of recognition, importance, or position within society.", example: "The organisation aims to ensure that all employees have equal status." },
  { word: "Equally beneficial", meaning: "beneficial to everyone", explanation: "Providing advantages or positive outcomes to all parties involved to a similar degree.", example: "Inclusive policies can be equally beneficial to employees and employers." },
  { word: "Everything is a result of our social environment", meaning: "environment shapes everything", explanation: "A viewpoint suggesting that human behaviour and development are primarily shaped by social and environmental influences rather than genetics.", example: "The claim that everything is a result of our social environment remains a subject of debate." },
  { word: "Evidence", meaning: "supporting information", explanation: "Facts, information, or objects used to support or establish the truth of a claim.", example: "The researchers presented evidence supporting their conclusion." },
  { word: "Evolve", meaning: "develop gradually", explanation: "To change gradually over time, especially across generations or through a long process of development.", example: "Social attitudes can evolve as education and economic conditions change." },
  { word: "Exhaust fumes/emissions", meaning: "polluting gases from engines", explanation: "Gases and particles released into the atmosphere by vehicles, factories, and other sources of combustion.", example: "Reducing exhaust fumes and emissions is essential for improving urban air quality." },
  { word: "Extenuating circumstances", meaning: "factors reducing seriousness", explanation: "Conditions or facts that make an offence appear less serious or more understandable and may affect the punishment.", example: "The court took the defendant's extenuating circumstances into account." },
  { word: "False imprisonment", meaning: "illegal confinement", explanation: "The unlawful confinement or imprisonment of a person against their will.", example: "The investigation focused on allegations of false imprisonment." },
  { word: "Female empowerment", meaning: "greater power for women", explanation: "The process of increasing women's social, economic, political, and personal ability to make decisions and achieve their goals.", example: "Access to education is widely regarded as an important factor in female empowerment." },
  { word: "Feminism/a feminist", meaning: "support for gender equality", explanation: "Feminism is a movement and set of ideas supporting gender equality, while a feminist is a person who supports those principles.", example: "Feminism has contributed significantly to discussions about women's rights and equality." },
  { word: "Fraternal twins", meaning: "twins from two eggs", explanation: "Twins who develop from two different eggs fertilised by two different sperm cells and therefore do not share identical genetic material.", example: "Fraternal twins can differ considerably in appearance and personality." },
  { word: "Fraud", meaning: "deception for gain", explanation: "Deliberate deception intended to obtain money, property, or another personal or financial advantage.", example: "Online fraud has become increasingly sophisticated in recent years." },
  { word: "Free rental of city bikes", meaning: "free short-term bike use", explanation: "Programmes that provide bicycles for free or at no cost for short journeys within a city.", example: "Free rental of city bikes could encourage residents to choose cleaner forms of transport." },
  { word: "Fungi", meaning: "mushrooms and molds", explanation: "A biological group that includes mushrooms, molds, and related organisms, many of which help decompose organic matter.", example: "Fungi play an essential role in recycling nutrients within ecosystems." },
  { word: "Gender discrimination", meaning: "unfair treatment by gender", explanation: "Unfair treatment of people because of their gender or sex.", example: "Gender discrimination can limit educational and professional opportunities." },
  { word: "Gender equality", meaning: "equal gender rights", explanation: "A condition in which people of different genders have equal rights, opportunities, treatment, and social value.", example: "Gender equality remains an important objective in many education systems." },
  { word: "Gender imbalance/divisions/bias/inequality", meaning: "unequal gender treatment", explanation: "These terms describe unequal representation, separation, preference, or treatment between genders.", example: "Gender imbalance in senior positions remains a concern in many organisations." },
  { word: "Gender stereotypes/identity/roles", meaning: "ideas about gender", explanation: "Gender stereotypes are simplified beliefs about genders; gender identity concerns how people understand their gender; gender roles are social expectations about behaviour.", example: "Education can challenge harmful gender stereotypes and restrictive gender roles." },
  { word: "Genes/genetic code/DNA", meaning: "biological genetic information", explanation: "These related terms refer to the biological information that carries hereditary instructions from one generation to the next.", example: "Genes, genetic code, and DNA are central concepts in modern biological research." },
  { word: "Genetic code, genes, DNA, genetic influence, what is hardwired", meaning: "inherited biological information", explanation: "These terms refer to genetic information carried through DNA and the inherited biological characteristics that influence an individual's development.", example: "Scientists continue to investigate how genetic code and environmental conditions interact." },
  { word: "Genetic code/genetic make-up", meaning: "genetic information", explanation: "Terms referring to the genetic information contained in DNA that contributes to the characteristics of an organism.", example: "An individual's genetic make-up can influence susceptibility to certain conditions." },
  { word: "Genocide", meaning: "systematic group destruction", explanation: "The systematic destruction or attempted destruction of a national, ethnic, racial, or religious group.", example: "International law recognises genocide as one of the most serious crimes." },
  { word: "Globalisation", meaning: "global connection", explanation: "The process through which countries, economies, businesses, and cultures become increasingly connected.", example: "Globalisation has accelerated the international exchange of goods, ideas, and services." },
  { word: "Grounding", meaning: "restriction from leaving home", explanation: "A punishment, usually for a child or teenager, in which they are not allowed to leave home.", example: "The teenager was given grounding after repeatedly ignoring household rules." },
  { word: "Guilty", meaning: "responsible for a crime", explanation: "Having been legally determined to have committed a crime.", example: "The defendant was found guilty after the evidence was examined." },
  { word: "Hacking", meaning: "unauthorised computer access", explanation: "The unauthorised access to or manipulation of computer systems, networks, or data.", example: "Hacking can expose sensitive personal information to criminals." },
  { word: "Happiness-boosting practices", meaning: "activities increasing happiness", explanation: "Activities, habits, or routines intended to improve a person's sense of happiness and overall well-being.", example: "Exercise, social interaction, and adequate sleep can be considered happiness-boosting practices." },
  { word: "Hardwired", meaning: "innate or programmed", explanation: "Describes a behaviour or characteristic that is considered instinctive, innate, or biologically programmed.", example: "Some basic human responses appear to be hardwired into the brain." },
  { word: "Hereditary", meaning: "passed through genes", explanation: "Describing a characteristic or condition that can be transmitted genetically from parents to offspring.", example: "Some hereditary characteristics become apparent only later in life." },
  { word: "Hereditary vs environmental influences", meaning: "genetic versus environmental effects", explanation: "A comparison between characteristics influenced by genetic inheritance and those shaped by environmental conditions.", example: "The study investigated hereditary versus environmental influences on academic performance." },
  { word: "Hereditary/inherited characteristics", meaning: "genetically passed traits", explanation: "Characteristics that are transmitted genetically from parents to their offspring.", example: "Some hereditary characteristics become visible early in childhood." },
  { word: "Hijacker", meaning: "person taking illegal control", explanation: "A person who illegally takes control of a vehicle, aircraft, or other means of transport.", example: "The hijacker was arrested after the incident ended." },
  { word: "Hijacking", meaning: "illegal vehicle control", explanation: "The illegal seizure or taking of control of an aircraft, vehicle, or other means of transport.", example: "Security procedures were strengthened to prevent aircraft hijacking." },
  { word: "How we are affected by our genetic makeup", meaning: "genetic effects on us", explanation: "This phrase describes the ways in which an individual's genetic composition influences physical, behavioural, or psychological characteristics.", example: "Research into how we are affected by our genetic makeup has expanded rapidly." },
  { word: "I grew up in Wales = I was brought up in Wales", meaning: "spent childhood in Wales", explanation: "These expressions describe where a person spent their childhood and where they were raised.", example: "I grew up in Wales, so many of my childhood memories are connected with the countryside." },
  { word: "Identical twins", meaning: "twins with same genetics", explanation: "Twins who develop from a single fertilised egg and therefore share essentially the same genetic material.", example: "Studies of identical twins can provide valuable evidence about genetic and environmental influences." },
  { word: "Illegal fly-tipping and oil spills", meaning: "unlawful waste dumping and oil release", explanation: "Illegal fly-tipping refers to unauthorised waste disposal, while oil spills involve the release of petroleum into the environment.", example: "Illegal fly-tipping and oil spills can cause severe and long-lasting environmental damage." },
  { word: "In our genetic make-up", meaning: "within our genes", explanation: "A phrase referring to characteristics that are considered part of a person's inherited biological composition.", example: "Some physical characteristics are strongly influenced by factors in our genetic make-up." },
  { word: "Incentives", meaning: "rewards for action", explanation: "Benefits or rewards offered to encourage people or organisations to behave in a particular way.", example: "Financial incentives may encourage consumers to purchase electric vehicles." },
  { word: "Indigenous Tribes", meaning: "original local groups", explanation: "Ethnic groups that are native to a particular region and maintain distinctive cultural, social, and spiritual connections to their ancestral land.", example: "Many Indigenous Tribes continue to protect their ancestral territories." },
  { word: "Influence of ethnicity/peer group", meaning: "effect of background and peers", explanation: "The ways in which ethnic background and social groups can influence a person's behaviour, attitudes, identity, and development.", example: "The influence of ethnicity and peer groups can vary considerably across different societies." },
  { word: "Inherited vs learned behavior/emotions", meaning: "genetic versus acquired behaviour", explanation: "A comparison between behaviours or emotions influenced by genetics and those developed through experience or learning.", example: "Researchers examine inherited versus learned behaviour to understand personality development." },
  { word: "Innate", meaning: "present from birth", explanation: "Existing naturally from birth rather than being acquired through learning or experience.", example: "Some researchers argue that humans possess innate abilities for language learning." },
  { word: "Innocent", meaning: "not responsible", explanation: "Not having committed the crime or wrongdoing of which someone is accused.", example: "The evidence eventually demonstrated that the suspect was innocent." },
  { word: "Inuit", meaning: "Arctic Indigenous people", explanation: "An Indigenous people who traditionally live in northern Canada, Greenland, and parts of Alaska.", example: "The Inuit have developed cultural practices adapted to the Arctic environment." },
  { word: "Isolation", meaning: "being kept apart", explanation: "The act of keeping a person separate from others, sometimes as a form of punishment.", example: "Prolonged isolation can have serious social and psychological consequences." },
  { word: "Judge", meaning: "court decision-maker", explanation: "A legal official who presides over court proceedings and makes decisions on legal matters.", example: "The judge carefully considered all the evidence before reaching a decision." },
  { word: "Judge/Jury", meaning: "court officials and decision group", explanation: "A judge manages legal proceedings, while a jury is a group of people who consider evidence and determine a verdict in relevant trials.", example: "The judge and jury carefully considered the evidence presented during the trial." },
  { word: "Jury", meaning: "trial decision group", explanation: "A group of people selected to consider evidence and decide whether a defendant is guilty or not guilty.", example: "The jury reached its verdict after several hours of discussion." },
  { word: "Justice", meaning: "fair treatment under law", explanation: "Fairness and the proper application of laws and legal principles.", example: "Equal access to justice is essential in a democratic society." },
  { word: "Livestock grazing", meaning: "animals feeding on grass", explanation: "The practice of allowing farm animals such as cattle or sheep to feed on vegetation in a particular area.", example: "Excessive livestock grazing can contribute to soil degradation." },
  { word: "Male entitlement", meaning: "belief in male privilege", explanation: "The belief that men naturally deserve greater power, authority, privileges, or advantages than women.", example: "The concept of male entitlement is frequently discussed in research on gender relations." },
  { word: "Manslaughter", meaning: "unintentional unlawful killing", explanation: "The unlawful killing of another person without the level of intent normally associated with murder.", example: "The court convicted him of manslaughter rather than murder." },
  { word: "Maslow’s hierarchy of human needs", meaning: "five levels of human needs", explanation: "A psychological theory proposing that human motivation can be understood through a hierarchy of needs ranging from basic survival needs to self-actualisation.", example: "Maslow's hierarchy of human needs is frequently discussed in introductory psychology courses." },
  { word: "Maximum / Minimum sentence", meaning: "highest or lowest penalty", explanation: "The maximum sentence is the greatest penalty permitted, while the minimum sentence is the lowest penalty allowed.", example: "The judge considered the maximum and minimum sentence available under the law." },
  { word: "Men tend to save for a car", meaning: "men often save for cars", explanation: "A generalisation stating that men may be more likely to save money with the aim of purchasing a car.", example: "Some surveys suggest that men tend to save for a car, although individual financial habits vary." },
  { word: "Mental health/well-being", meaning: "psychological well-being", explanation: "A person's emotional, psychological, and social condition and their ability to cope with ordinary challenges.", example: "Regular social interaction can contribute positively to mental health and well-being." },
  { word: "Mental wellness/illness", meaning: "good or poor mental health", explanation: "Mental wellness refers to positive psychological health, while mental illness refers to conditions that significantly affect emotional, psychological, or social functioning.", example: "Schools increasingly recognise the importance of supporting students' mental wellness." },
  { word: "Mimicking violent behavior", meaning: "copying violent actions", explanation: "Copying or imitating aggressive or violent behaviour observed in other people or media.", example: "Researchers have examined whether repeated exposure to violence encourages mimicking violent behaviour." },
  { word: "Misogyny/a misogynist", meaning: "hatred or prejudice against women", explanation: "Misogyny refers to hatred, contempt, or prejudice against women, while a misogynist is a person who holds such views.", example: "Educational programmes can help challenge attitudes rooted in misogyny." },
  { word: "Monitoring", meaning: "regular observation", explanation: "The act of observing or checking something regularly in order to identify changes, problems, or risks.", example: "Continuous monitoring is necessary to assess the effectiveness of the programme." },
  { word: "More accessible metro system", meaning: "easier metro access", explanation: "A metro system designed to be easier for everyone to use through better stations, routes, services, and accessibility features.", example: "A more accessible metro system would benefit both residents and visitors." },
  { word: "More cycle lanes", meaning: "additional bike lanes", explanation: "An increase in designated road space for cyclists, intended to make cycling safer and more convenient.", example: "Building more cycle lanes could encourage commuters to cycle to work." },
  { word: "More electric trams", meaning: "additional electric trams", explanation: "An increase in the use of trams powered by electricity as a form of public transportation.", example: "More electric trams could reduce dependence on petrol-powered vehicles." },
  { word: "More frequent buses/Extended network of buses", meaning: "more buses and wider routes", explanation: "Increasing bus frequency and expanding the areas served by bus routes to make public transport more accessible.", example: "More frequent buses and an extended network could improve public transport in suburban areas." },
  { word: "More pedestrianised streets", meaning: "more car-free streets", explanation: "An increase in streets reserved mainly or entirely for pedestrians.", example: "More pedestrianised streets could improve the quality of life in crowded urban areas." },
  { word: "Murder", meaning: "unlawful killing", explanation: "The unlawful and intentional killing of another person.", example: "The investigation focused on determining who was responsible for the murder." },
  { word: "Murder (Homicide USA)", meaning: "unlawful killing", explanation: "The unlawful killing of another person; homicide is a broader legal term commonly used in the United States.", example: "The investigation treated the death as a possible case of murder." },
  { word: "Murderer", meaning: "person who commits murder", explanation: "A person who deliberately kills another person unlawfully.", example: "The murderer was eventually convicted after a lengthy investigation." },
  { word: "Native Americans", meaning: "Indigenous peoples of America", explanation: "A term referring to the Indigenous peoples of North, Central, and South America.", example: "Many Native American communities continue to preserve their traditional languages and customs." },
  { word: "Native Americans/Inuit", meaning: "Indigenous American peoples", explanation: "A combined reference to Indigenous peoples of the Americas, including Native Americans and Inuit communities in Arctic regions.", example: "Native Americans and Inuit communities have diverse histories and cultural traditions." },
  { word: "Natural habitats have become degraded", meaning: "natural areas have been damaged", explanation: "This phrase describes natural environments that have deteriorated because of human activity or environmental change.", example: "Many natural habitats have become degraded as a result of rapid urban development." },
  { word: "Natural regeneration", meaning: "natural recovery", explanation: "The natural process through which ecosystems, forests, or plants recover after damage or disturbance.", example: "Natural regeneration can restore forests without extensive human intervention." },
  { word: "Natural selection/survival of the fittest", meaning: "evolution through adaptation", explanation: "The evolutionary process in which organisms with characteristics better suited to their environment are more likely to survive and reproduce.", example: "Natural selection explains how advantageous characteristics can become more common over generations." },
  { word: "Natural/innate/genetic/heritable", meaning: "inborn or inheritable", explanation: "These terms describe characteristics that are present from birth or can be transmitted genetically.", example: "The researchers distinguished natural and innate characteristics from behaviours learned through experience." },
  { word: "Nature or nurture", meaning: "genes or environment", explanation: "A debate about whether human characteristics and behaviour are mainly shaped by genetic inheritance or environmental experiences.", example: "The nature or nurture debate remains important in psychology and behavioural science." },
  { word: "Navigation", meaning: "planning a route", explanation: "The process or skill of determining a position and finding or controlling a route from one place to another.", example: "Modern navigation systems have made long-distance travel considerably safer." },
  { word: "Non-custodial sentence", meaning: "sentence outside prison", explanation: "A criminal sentence that allows an offender to remain outside prison while completing requirements such as community service or supervision.", example: "A non-custodial sentence may allow offenders to maintain employment while completing their punishment." },
  { word: "Nurture", meaning: "environmental upbringing", explanation: "The influence of upbringing, environment, education, and social experiences on human development.", example: "The study considers both nature and nurture in explaining personality." },
  { word: "Optimistic/pessimistic", meaning: "hopeful or negative", explanation: "Optimistic describes expecting positive outcomes, while pessimistic describes expecting negative outcomes or focusing on difficulties.", example: "People with an optimistic outlook may be more willing to take on challenging tasks." },
  { word: "Organic", meaning: "produced from living matter", explanation: "Something connected with living organisms or produced from them.", example: "Organic farming avoids many synthetic chemicals." },
  { word: "Organised crime", meaning: "planned criminal activity", explanation: "Criminal activity carried out systematically by organised groups or networks.", example: "Authorities are cooperating internationally to combat organised crime." },
  { word: "Park and ride schemes", meaning: "parking plus public transport", explanation: "Transport systems that allow drivers to park outside a city and continue their journey by public transport.", example: "Park and ride schemes can reduce congestion in busy city centres." },
  { word: "Patriarchal society", meaning: "male-dominated society", explanation: "A society or social system in which men traditionally hold greater power, authority, or leadership.", example: "Some historical institutions developed within a strongly patriarchal society." },
  { word: "Pedestrian", meaning: "person walking", explanation: "A person who travels on foot rather than in a vehicle.", example: "The new crossing provides greater protection for pedestrians." },
  { word: "Pedestrians/Pedestrianised streets", meaning: "walkers or car-free streets", explanation: "Pedestrians are people travelling on foot, while pedestrianised streets are areas where vehicles are restricted or prohibited.", example: "Pedestrianised streets can make city centres safer and more pleasant." },
  { word: "Peer", meaning: "person in same group", explanation: "A person who belongs to the same social, age, professional, or status group as another person.", example: "Young people are often strongly influenced by their peers." },
  { word: "Peer influence", meaning: "effect of peers", explanation: "The influence that people in the same social group can have on an individual's decisions, attitudes, and behaviour.", example: "Peer influence can affect teenagers' academic motivation." },
  { word: "Peer pressure", meaning: "pressure from peers", explanation: "Pressure from friends, classmates, or colleagues to behave in a particular way.", example: "Peer pressure can influence teenagers' decisions and behaviour." },
  { word: "Penalty / Punishment", meaning: "consequence for wrongdoing", explanation: "Both terms refer to a consequence imposed for breaking a law or rule, although penalty is often used for specific offences.", example: "The severity of the penalty should reflect the seriousness of the offence." },
  { word: "Pessimistic", meaning: "expect negative outcomes", explanation: "Having a tendency to expect bad results or to focus on the negative aspects of situations.", example: "A pessimistic outlook can make people less willing to take reasonable risks." },
  { word: "Pickpocketing", meaning: "stealing from pockets", explanation: "The act of secretly taking money or possessions from someone's pocket or bag without their knowledge.", example: "Tourists should remain alert because pickpocketing is common in crowded areas." },
  { word: "Poor air quality", meaning: "polluted air", explanation: "A condition in which the air contains harmful substances at levels that may threaten health or the environment.", example: "Poor air quality is particularly dangerous for people with respiratory problems." },
  { word: "Possessions", meaning: "things someone owns", explanation: "Objects, property, or material items that belong to a person.", example: "People sometimes attach too much importance to their possessions." },
  { word: "Possessions/wealth", meaning: "owned goods or riches", explanation: "Possessions are the things a person owns, while wealth refers more broadly to substantial financial or material resources.", example: "Some people associate happiness with possessions and wealth." },
  { word: "Premeditated murder", meaning: "planned intentional killing", explanation: "Murder that is deliberately planned and intended before the act takes place.", example: "The prosecution argued that the evidence demonstrated premeditated murder." },
  { word: "Preservation of Cultural Identity", meaning: "maintenance of cultural distinctiveness", explanation: "The deliberate protection of traditions, languages, beliefs, and practices that distinguish one cultural group from others.", example: "The preservation of cultural identity can become difficult when communities experience strong external pressures." },
  { word: "Prohibited/Strictly regulated", meaning: "banned or tightly controlled", explanation: "Used for activities that are either completely forbidden or controlled by strict rules and regulations.", example: "Fishing in the protected area is prohibited and strictly regulated." },
  { word: "Proof", meaning: "evidence of truth", explanation: "Evidence that demonstrates that a statement, claim, or conclusion is true.", example: "The investigators found proof that the original report was inaccurate." },
  { word: "Prosecutor", meaning: "lawyer for the case", explanation: "A lawyer who represents the state or another authority in a criminal case against an accused person.", example: "The prosecutor presented several pieces of evidence to the court." },
  { word: "Protection from landslides and floods", meaning: "measures against environmental hazards", explanation: "Strategies and physical measures designed to minimise the effects of landslides and flooding in areas exposed to these hazards.", example: "Reforestation can contribute to protection from landslides and floods in vulnerable regions." },
  { word: "Reducing shoplifting and car crime", meaning: "lowering theft-related crime", explanation: "The process of decreasing theft from shops and criminal activity involving vehicles.", example: "Improved security measures are aimed at reducing shoplifting and car crime." },
  { word: "Rehabilitation", meaning: "return to normal life", explanation: "The process of helping someone recover and return to productive social life after imprisonment, crime, or other difficulties.", example: "Education can play an important role in the rehabilitation of offenders." },
  { word: "Reintegrate back into society", meaning: "return to social life", explanation: "To help someone return to normal participation in society after exclusion, imprisonment, or another period of separation.", example: "Education and employment can help former prisoners reintegrate back into society." },
  { word: "Responsible Tourism", meaning: "sustainable travel", explanation: "Travel that reduces environmental harm, respects local cultures, and benefits host communities.", example: "Responsible tourism can help protect fragile ecosystems while supporting local economies." },
  { word: "Road access charges in city centres", meaning: "fees for entering city centres", explanation: "Charges imposed on vehicles entering or driving through certain urban areas, usually to reduce traffic congestion.", example: "Road access charges in city centres may discourage unnecessary car journeys." },
  { word: "Road safety", meaning: "safe road use", explanation: "The practice of making roads and transportation systems safer for drivers, cyclists, and pedestrians.", example: "Improving road safety requires better infrastructure as well as responsible driving." },
  { word: "Role models", meaning: "people worth imitating", explanation: "People whose behaviour, achievements, or qualities are admired and considered examples to follow.", example: "Successful athletes can serve as role models for young people." },
  { word: "Running a red light", meaning: "driving through a red signal", explanation: "Driving through a traffic signal after it has turned red.", example: "Running a red light can endanger pedestrians and other drivers." },
  { word: "Seafarers", meaning: "people who travel by sea", explanation: "People who work or travel on the sea, especially sailors and maritime explorers.", example: "Early seafarers played an important role in connecting distant civilizations." },
  { word: "Sexism", meaning: "gender-based prejudice", explanation: "Prejudice, discrimination, or unfair treatment based on the belief that one sex is less capable or valuable than another.", example: "The organisation introduced new policies to address sexism in the workplace." },
  { word: "Sexual discrimination/harassment", meaning: "unfair gender treatment or unwanted behaviour", explanation: "Sexual discrimination involves unfair treatment based on sex or gender, while sexual harassment involves unwanted sexual behaviour or remarks.", example: "Employers should have clear procedures for addressing sexual discrimination and harassment." },
  { word: "Sexual harassment", meaning: "unwanted sexual behaviour", explanation: "Unwanted sexual comments, behaviour, advances, or conduct that causes discomfort, distress, or intimidation.", example: "Companies should provide clear procedures for reporting sexual harassment." },
  { word: "Shoplifter", meaning: "person stealing from a shop", explanation: "A person who steals goods from a shop without paying for them.", example: "The shoplifter was stopped by security staff before leaving the building." },
  { word: "Shoplifting", meaning: "stealing from a shop", explanation: "The act of taking goods from a shop without paying for them.", example: "The store introduced additional security measures to reduce shoplifting." },
  { word: "Smuggler", meaning: "person who smuggles", explanation: "A person who illegally transports goods or people across borders.", example: "The smuggler attempted to transport the goods across the border secretly." },
  { word: "Smuggling", meaning: "illegal movement of goods", explanation: "The illegal import or export of goods, often in order to avoid laws, taxes, or controls.", example: "Customs officers are trained to detect attempts at smuggling." },
  { word: "Social factors", meaning: "social influences", explanation: "External social conditions and circumstances that affect people's behaviour, decisions, and development.", example: "Social factors can play a significant role in determining educational outcomes." },
  { word: "Social influence", meaning: "effect of other people", explanation: "The effect that other people or groups have on an individual's attitudes, decisions, and behaviour.", example: "Social influence can shape people's consumption habits." },
  { word: "Social status", meaning: "position in society", explanation: "A person's social position or standing, often influenced by occupation, income, education, family background, or reputation.", example: "Social status can influence access to education and professional opportunities." },
  { word: "Society", meaning: "organised human community", explanation: "A community of people who live together and share institutions, values, laws, and social practices.", example: "Education plays a central role in shaping modern society." },
  { word: "Sophisticated", meaning: "advanced and complex", explanation: "Highly developed, advanced, or complex in design, technology, or function.", example: "The city has installed a sophisticated surveillance system." },
  { word: "Speeding", meaning: "driving too fast", explanation: "Driving a vehicle faster than the legally permitted speed limit.", example: "Speeding is a major contributor to serious road accidents." },
  { word: "Stuck in the rat-race/on the treadmill", meaning: "trapped in exhausting routine", explanation: "Being caught in a repetitive and demanding lifestyle, often involving continuous work or competition for success, money, or status.", example: "Many professionals feel stuck in the rat-race and struggle to find time for their families." },
  { word: "Studies based on identical (not fraternal) twins", meaning: "research using identical twins", explanation: "Research using genetically similar identical twins to investigate the relative effects of heredity and environment.", example: "Studies based on identical twins can provide evidence about the genetic basis of certain behaviours." },
  { word: "Suffrage", meaning: "right to vote", explanation: "The legal right to vote in political elections.", example: "The extension of suffrage transformed political participation in many countries." },
  { word: "Surrendering our personal and moral code to the service of larger institutional structures", meaning: "giving up personal ethics for institutions", explanation: "The process of abandoning individual values or moral principles in order to follow the rules and objectives of a powerful institution.", example: "The author examines the risks of surrendering our personal and moral code to larger institutional structures." },
  { word: "Surveillance equipment/society", meaning: "technology or society under monitoring", explanation: "Surveillance equipment consists of technologies used for observation, while a surveillance society is one in which monitoring is widespread.", example: "The growth of surveillance equipment has contributed to concerns about the development of a surveillance society." },
  { word: "Survival value to our ancestors", meaning: "benefit for ancestral survival", explanation: "The extent to which a behaviour or characteristic helped ancestors survive and reproduce successfully.", example: "Certain fears may have had survival value to our ancestors." },
  { word: "Take into consideration", meaning: "carefully consider", explanation: "To think carefully about a particular factor when making a decision.", example: "Researchers should take social factors into consideration when interpreting the results." },
  { word: "Teenage criminal / Juvenile delinquent", meaning: "young person committing crime", explanation: "A young person who commits criminal or seriously antisocial acts.", example: "Early intervention may reduce the likelihood that a juvenile delinquent will reoffend." },
  { word: "Terrorism", meaning: "violence for political aims", explanation: "The unlawful use or threat of violence, often against civilians, to achieve political or ideological objectives.", example: "Governments have introduced measures intended to prevent terrorism." },
  { word: "Terrorist", meaning: "person committing terrorism", explanation: "A person who commits or supports acts of terrorism.", example: "The investigation sought to identify the people responsible for the terrorist attack." },
  { word: "The death penalty (capital punishment)", meaning: "legal execution", explanation: "A legal punishment in which a person convicted of a very serious crime is sentenced to death.", example: "The use of the death penalty remains a controversial issue in many countries." },
  { word: "The effectiveness of CCTV", meaning: "CCTV success in prevention", explanation: "The extent to which closed-circuit television systems successfully monitor locations, discourage offences, or provide useful evidence.", example: "The effectiveness of CCTV depends partly on camera placement, image quality, and appropriate monitoring." },
  { word: "The fight against crime", meaning: "crime reduction efforts", explanation: "The broad range of institutional and community efforts aimed at reducing criminal activity and protecting public safety.", example: "Community cooperation is increasingly regarded as an important component of the fight against crime." },
  { word: "The heritability of a trait", meaning: "genetic inheritance likelihood", explanation: "The extent to which variation in a particular trait within a population can be associated with genetic differences.", example: "Scientists estimate the heritability of a trait using carefully designed studies." },
  { word: "The influence of the environment vs the influence of heredity", meaning: "environmental versus genetic influence", explanation: "A comparison between the effects of environmental conditions and inherited genetic factors on human characteristics.", example: "Twin research can help scientists examine the influence of the environment versus the influence of heredity." },
  { word: "The law / A lawyer", meaning: "legal rules or legal adviser", explanation: "The law is the system of rules governing a society, while a lawyer is a professional who advises and represents people on legal matters.", example: "A lawyer explained how the new law would affect local businesses." },
  { word: "The limitations of cameras", meaning: "weaknesses of cameras", explanation: "The disadvantages or restrictions of cameras, including limited coverage, poor image quality, or restricted viewing angles.", example: "The limitations of cameras mean that surveillance cannot prevent every crime." },
  { word: "The Māori", meaning: "Indigenous New Zealand people", explanation: "The Indigenous Polynesian people of New Zealand, known for their distinctive culture, traditions, and language.", example: "The Māori language and traditions form an important part of New Zealand's cultural heritage." },
  { word: "The nature versus nurture debate", meaning: "genetics versus environment debate", explanation: "The long-standing debate over whether genetic inheritance or environmental experience has a stronger influence on human development.", example: "The nature versus nurture debate has influenced psychological research for decades." },
  { word: "The pay gap", meaning: "difference in wages", explanation: "The difference in average earnings between groups, particularly the difference in earnings between men and women.", example: "Researchers continue to examine the causes of the gender pay gap." },
  { word: "The pursuit of scientific truth", meaning: "search for scientific knowledge", explanation: "The effort to discover accurate, evidence-based knowledge through systematic scientific investigation.", example: "The pursuit of scientific truth requires researchers to evaluate evidence objectively." },
  { word: "The rat-race", meaning: "competitive exhausting lifestyle", explanation: "A highly competitive and tiring lifestyle in which people continuously pursue money, status, career success, or other external goals.", example: "After years in the rat-race, he decided to adopt a simpler lifestyle." },
  { word: "The role of inheritance", meaning: "importance of genetic inheritance", explanation: "The extent to which inherited genetic factors contribute to characteristics compared with environmental influences.", example: "The role of inheritance is difficult to separate completely from environmental influences." },
  { word: "Theft", meaning: "act of stealing", explanation: "The act of taking something that belongs to another person without permission.", example: "The company introduced new security measures to reduce theft." },
  { word: "Thief", meaning: "person who steals", explanation: "A person who steals property belonging to someone else.", example: "The thief was identified through security-camera footage." },
  { word: "This happiness movement has provoked a great deal of opposition among psychologists", meaning: "happiness movement faced opposition", explanation: "This expression states that efforts or ideas associated with pursuing happiness have generated significant disagreement or resistance among psychologists.", example: "The claim that constant happiness should be the main goal has provoked a great deal of opposition among psychologists." },
  { word: "To achieve balanced participation and representation in political and public decision-making", meaning: "to ensure equal representation", explanation: "To ensure that different genders, particularly men and women, participate fairly and are adequately represented in public leadership and decision-making.", example: "Policies can be introduced to achieve balanced participation and representation in public decision-making." },
  { word: "To act as a deterrent", meaning: "to discourage wrongdoing", explanation: "To discourage people from doing something by making the consequences unattractive or threatening.", example: "Visible police patrols may act as a deterrent to criminal activity." },
  { word: "To be innocent/guilty", meaning: "not responsible or responsible", explanation: "To be innocent means not to have committed the offence, while to be guilty means to have committed it.", example: "The court must determine whether the accused is innocent or guilty." },
  { word: "To be optimistic", meaning: "expect positive outcomes", explanation: "To maintain a hopeful and positive expectation about the future or about a particular situation.", example: "Despite the uncertainty, researchers remain optimistic about the project's long-term results." },
  { word: "To be soft on crime", meaning: "to use mild punishments", explanation: "To take a relatively lenient approach to criminal behaviour rather than using severe punishments.", example: "The debate focused on whether the justice system was too soft on crime." },
  { word: "To combat gender stereotypes and sexism", meaning: "to challenge gender prejudice", explanation: "To actively oppose fixed assumptions about gender and discriminatory attitudes based on sex.", example: "Schools can help combat gender stereotypes and sexism through inclusive education." },
  { word: "To commit a crime", meaning: "to break the law", explanation: "To perform an illegal action that violates the law.", example: "People who commit a crime may face serious legal consequences." },
  { word: "To covet worldly possessions", meaning: "strongly desire material goods", explanation: "To desire material possessions or wealth excessively, especially because they are associated with status or success.", example: "A culture that encourages people to covet worldly possessions may increase dissatisfaction." },
  { word: "To deter (n = deterrent)", meaning: "to discourage", explanation: "To prevent someone from doing something by making the action less attractive or by increasing its perceived consequences; a deterrent is something that discourages an action.", example: "Higher penalties may deter drivers from repeatedly violating traffic laws." },
  { word: "To deter someone from doing something", meaning: "to discourage an action", explanation: "To prevent or discourage someone from taking an action by highlighting or increasing its negative consequences.", example: "Strict penalties may deter people from repeatedly breaking the law." },
  { word: "To eliminate worry, stress, dejection, and boredom", meaning: "remove negative feelings", explanation: "To reduce or remove feelings such as anxiety, stress, sadness, discouragement, and lack of interest.", example: "Creative activities may help people eliminate worry, stress, dejection, and boredom." },
  { word: "To feel that something is missing", meaning: "feel incomplete", explanation: "To experience the feeling that an important element, purpose, relationship, or source of satisfaction is absent from one's life.", example: "Despite achieving financial success, she felt that something was missing." },
  { word: "To forgo our sense of personal responsibility for the sake of an institutional authority figure", meaning: "give up personal responsibility", explanation: "To abandon individual accountability in order to obey or satisfy an authority figure within an institution.", example: "Individuals should not forgo their sense of personal responsibility simply because an authority figure gives an instruction." },
  { word: "To fulfil basic survival needs", meaning: "meet essential needs", explanation: "To obtain or provide the fundamental necessities required for human survival, such as food, water, and shelter.", example: "People must fulfil basic survival needs before they can focus fully on long-term goals." },
  { word: "To give a false sense of security", meaning: "to create misleading safety", explanation: "To make people feel safe even though a real danger or risk still exists.", example: "Excessive reliance on technology may give residents a false sense of security." },
  { word: "To go to prison", meaning: "to be imprisoned", explanation: "To be sent to prison as a legal punishment after being convicted of a crime.", example: "A person convicted of a serious offence may be required to go to prison." },
  { word: "To have a comfortable retirement", meaning: "live comfortably after work", explanation: "To have sufficient financial resources to maintain a satisfactory standard of living after stopping full-time employment.", example: "Long-term financial planning can help people have a comfortable retirement." },
  { word: "To have a positive mindset/attitude/outlook", meaning: "think positively", explanation: "To approach life with an optimistic, constructive, and hopeful way of thinking.", example: "Maintaining a positive mindset can help individuals respond more effectively to setbacks." },
  { word: "To increase our well-being", meaning: "improve our quality of life", explanation: "To improve overall physical, psychological, social, or emotional health and happiness.", example: "Regular exercise and meaningful social connections can increase our well-being." },
  { word: "To inherit certain traits", meaning: "receive traits genetically", explanation: "To receive physical, behavioural, or biological characteristics from one's parents or ancestors through genetic inheritance.", example: "Children may inherit certain traits from both parents." },
  { word: "To inherit certain traits, hereditary characteristics, the heritability of a trait, the role of inheritance", meaning: "receiving traits genetically", explanation: "These expressions describe genetic characteristics passed from parents to offspring and the extent to which particular traits can be inherited.", example: "Scientists study the heritability of a trait to understand the role of inheritance in human development." },
  { word: "To invade our privacy", meaning: "to violate private space", explanation: "To interfere with someone's personal space or private information without permission.", example: "Some citizens argue that constant surveillance can invade our privacy." },
  { word: "To invest in stocks and shares", meaning: "buy company investments", explanation: "To put money into shares of companies with the expectation of receiving returns or increasing the value of the investment.", example: "Some people choose to invest in stocks and shares to build long-term wealth." },
  { word: "To look on the bright side", meaning: "focus on positives", explanation: "To concentrate on the positive aspects of a difficult situation rather than focusing entirely on its negative aspects.", example: "Although the project failed, the team tried to look on the bright side and learn from the experience." },
  { word: "To medicate (yourself)", meaning: "treat yourself with medicine", explanation: "To use medication to treat an illness or symptom, especially without appropriate professional supervision.", example: "People should avoid trying to medicate themselves without reliable medical advice." },
  { word: "To pay/impose a fine", meaning: "to give or require payment", explanation: "To pay a fine means to pay a financial penalty, while to impose a fine means to officially require someone to pay it.", example: "Drivers may have to pay a fine if they violate traffic regulations." },
  { word: "To prevent and combat violence against women", meaning: "to stop violence against women", explanation: "To take action to prevent and oppose physical, emotional, or sexual violence directed towards women.", example: "Governments have a responsibility to prevent and combat violence against women." },
  { word: "To punish/Punishment", meaning: "to impose a penalty", explanation: "To punish means to impose a penalty for wrongdoing, while punishment is the penalty itself.", example: "The purpose of punishment should be considered carefully in any criminal justice system." },
  { word: "To REAR children = to bring up children (not to grow/grow up children)", meaning: "to raise children", explanation: "To rear or bring up children means to care for, educate, and support them until they become mature and independent.", example: "Parents have a major responsibility to rear children in a safe and supportive environment." },
  { word: "To save/put aside money for retirement", meaning: "save money for later life", explanation: "To reserve money during one's working life so that it can be used after retirement.", example: "People are encouraged to save or put aside money for retirement as early as possible." },
  { word: "To start thinking about pensions", meaning: "begin retirement planning", explanation: "To begin considering how to financially prepare for the period after employment.", example: "Young adults should start thinking about pensions before retirement becomes an immediate concern." },
  { word: "To strive for accomplishments in life", meaning: "work hard for achievements", explanation: "To make continuous and determined efforts to achieve goals, success, or meaningful results in life.", example: "Many students strive for accomplishments in life through education and professional development." },
  { word: "To subsidize", meaning: "financially support", explanation: "To provide financial assistance, often from a government, in order to reduce costs or encourage an activity.", example: "The government decided to subsidize public transport for low-income residents." },
  { word: "To suffer from depression", meaning: "experience prolonged low mood", explanation: "To experience a prolonged period of severe sadness, hopelessness, low motivation, or other symptoms associated with depression.", example: "People who suffer from depression may require professional support and appropriate treatment." },
  { word: "To suspend/revoke a licence", meaning: "withdraw legal permission", explanation: "To suspend a licence is to temporarily remove its validity, whereas to revoke it is to cancel the permission entirely.", example: "Regulators can suspend or revoke a licence when a company repeatedly violates safety standards." },
  { word: "Traditional ideas about women’s roles", meaning: "conventional views of women's roles", explanation: "Conventional beliefs about the responsibilities and behaviours women are expected to have in society.", example: "Traditional ideas about women's roles have changed considerably in many societies." },
  { word: "Traffic offences", meaning: "violations of road rules", explanation: "Crimes or violations involving traffic regulations and driving laws.", example: "Repeated traffic offences can result in the suspension of a driving licence." },
  { word: "Trafficker", meaning: "person involved in trafficking", explanation: "A person who participates in the illegal trade or movement of people or goods.", example: "The authorities arrested several suspected traffickers." },
  { word: "Trafficking", meaning: "illegal trade or movement", explanation: "The illegal trade or movement of goods or people, often involving exploitation.", example: "International agencies cooperate to combat human trafficking." },
  { word: "Trial", meaning: "legal court process", explanation: "A formal legal process in which evidence is examined to determine whether someone is guilty of a crime.", example: "The trial lasted several weeks because the case was particularly complex." },
  { word: "Twins that were REARED apart (brought up)", meaning: "twins raised separately", explanation: "Twins who were separated and raised in different environments, allowing researchers to compare genetic and environmental influences.", example: "Twins that were reared apart have provided valuable evidence for behavioural research." },
  { word: "Under-representation of girls in STEM subjects", meaning: "too few girls in STEM", explanation: "A situation in which girls and women are represented in insufficient numbers in science, technology, engineering, and mathematics.", example: "Scholarships may help address the under-representation of girls in STEM subjects." },
  { word: "Unpremeditated murder", meaning: "unplanned intentional killing", explanation: "Murder that was not planned or considered in advance.", example: "The circumstances suggested that the killing was unpremeditated." },
  { word: "Vandal", meaning: "person causing property damage", explanation: "A person who deliberately damages or destroys property.", example: "The vandal damaged several public buildings during the night." },
  { word: "Wealth", meaning: "abundance of money", explanation: "A large amount of money, property, or other valuable resources owned by a person or group.", example: "Greater wealth does not necessarily guarantee greater happiness." },
  { word: "What people are born with and what’s caused by experience or lifestyle", meaning: "innate traits versus acquired traits", explanation: "This phrase distinguishes characteristics present from birth from those that develop because of experience, environment, or personal choices.", example: "Researchers often investigate what people are born with and what is caused by experience or lifestyle." },
  { word: "White collar crime", meaning: "professional financial crime", explanation: "Non-violent crime committed by professionals or people in positions of responsibility, usually for financial gain.", example: "Financial regulation can help prevent white collar crime." },
  { word: "Witness", meaning: "person who saw an event", explanation: "A person who saw an event or has relevant information and can provide evidence about it.", example: "The witness provided important information about what happened." },
  { word: "Women are more likely to save up for a house", meaning: "women often save for housing", explanation: "A generalisation stating that women may be more inclined to save money with the goal of buying a house.", example: "Some studies report that women are more likely to save up for a house, although financial behaviour differs among individuals." },
  { word: "Women’s exclusion", meaning: "excluding women", explanation: "The process of preventing women from participating in opportunities, institutions, activities, or areas of society.", example: "Women's exclusion from education can limit economic development." },
  { word: "Women’s participation", meaning: "women's involvement", explanation: "The involvement of women in social, economic, political, educational, and national development.", example: "Women's participation in the workforce has increased in many countries." },
  { word: "Women’s rights", meaning: "rights of women", explanation: "The freedoms, protections, and entitlements that women are recognised as having under social or legal systems.", example: "Education has played an important role in raising awareness of women's rights." },
  { word: "Alternative", meaning: "Another possible option", explanation: "One of two or more available possibilities or choices.", example: "Solar power is a popular alternative to fossil fuels." },
  { word: "Analysis", meaning: "Detailed examination", explanation: "A detailed examination of the elements or structure of something.", example: "The report presents a detailed analysis of market trends." },
  { word: "Approach", meaning: "A way of dealing with something", explanation: "A way of dealing with or thinking about a particular problem or situation.", example: "Teachers are adopting a more practical approach to education." },
  { word: "Aquifer", meaning: "An underground layer that stores and carries water", explanation: "A layer of permeable rock or sediment that contains groundwater and allows it to move.", example: "The town obtains much of its drinking water from an underground aquifer." },
  { word: "Archaeologists", meaning: "Scientists who study human history through physical remains", explanation: "Researchers who study past human societies by examining buildings, objects, remains, and other archaeological evidence.", example: "Archaeologists discovered ancient structures beneath the city." },
  { word: "Architecture", meaning: "The design and style of buildings", explanation: "The art and science of designing and constructing buildings and other structures.", example: "The city is famous for its historic architecture." },
  { word: "Assessment", meaning: "An evaluation or judgement", explanation: "The evaluation or estimation of the nature or quality of something.", example: "Teachers carry out regular assessment of student progress." },
  { word: "Assume", meaning: "To suppose without proof", explanation: "To accept something as true without having proof of it.", example: "Many people assume that older technology is always less efficient." },
  { word: "Authority", meaning: "Power to give orders or make decisions", explanation: "The power or right to give orders, make decisions, and enforce obedience.", example: "Local authorities are responsible for maintaining public roads." },
  { word: "Biodegradable", meaning: "Able to break down naturally", explanation: "Able to decompose naturally through the action of microorganisms and other biological processes.", example: "Biodegradable packaging can reduce persistent waste." },
  { word: "Biological pest control", meaning: "Using living organisms to control harmful pests", explanation: "A method of controlling pests by using natural predators, parasites, or other organisms instead of relying mainly on chemical pesticides.", example: "Biological pest control can reduce the need for synthetic chemicals." },
  { word: "Carbon emissions", meaning: "Carbon-based gases released into the atmosphere", explanation: "Gases containing carbon, especially carbon dioxide, released through activities such as burning fossil fuels.", example: "Governments are trying to reduce carbon emissions." },
  { word: "Choice", meaning: "An act of choosing", explanation: "The act of selecting between two or more possibilities.", example: "Consumers now have a wider choice of products than ever before." },
  { word: "Compare", meaning: "To examine similarities and differences", explanation: "To examine two or more things in order to note their similarities and differences.", example: "Researchers compared the results of the two studies." },
  { word: "Complex", meaning: "Made of many interconnected parts", explanation: "Consisting of many interconnected parts and therefore difficult to understand.", example: "Climate change is a complex issue with many contributing factors." },
  { word: "Composting", meaning: "The process of turning organic waste into useful material", explanation: "The controlled decomposition of organic waste to produce compost that can improve soil.", example: "Composting food waste can reduce the amount sent to landfill." },
  { word: "Condensation", meaning: "The process in which gas becomes liquid", explanation: "The process by which water vapour or another gas changes into a liquid.", example: "Condensation forms when warm air meets a cold surface." },
  { word: "Consequently", meaning: "As a result", explanation: "As a result of something; therefore.", example: "Demand fell sharply; consequently, prices dropped too." },
  { word: "Conservationist", meaning: "A person who works to protect nature or historic resources", explanation: "A person who supports the protection and careful management of natural or cultural resources.", example: "The conservationist campaigned to protect the historic site." },
  { word: "Conservationists", meaning: "People who work to protect and preserve nature", explanation: "People involved in protecting wildlife, habitats, biodiversity, and natural resources from damage or depletion.", example: "Conservationists are monitoring the population of the endangered species." },
  { word: "Conservator", meaning: "A person who protects and preserves valuable objects or buildings", explanation: "A professional who works to preserve and restore objects, artworks, buildings, or other culturally important materials.", example: "A conservator examined the historic paintings." },
  { word: "Conserve", meaning: "To protect and use something carefully", explanation: "To prevent waste or unnecessary use of a natural resource, energy, or other valuable thing.", example: "People should conserve water during periods of drought." },
  { word: "Constitute", meaning: "To form or make up", explanation: "To be a part of a whole, or to legally form or establish something.", example: "Young people constitute a large proportion of the population." },
  { word: "Construct", meaning: "To build something", explanation: "To build or create a structure such as a house, road, or bridge.", example: "The company plans to construct a new residential building." },
  { word: "Construction", meaning: "The process of building something", explanation: "The work involved in building structures such as houses, roads, and bridges.", example: "Construction of the new apartment block began last month." },
  { word: "Consumer", meaning: "A person who buys goods or services", explanation: "A person who purchases goods or services for personal use.", example: "Consumers are becoming more aware of environmental issues." },
  { word: "Consumption", meaning: "The use of goods or energy", explanation: "The action of using up a resource such as food, energy, or materials.", example: "Household energy consumption rises significantly in winter." },
  { word: "Contamination", meaning: "The presence of harmful substances in something", explanation: "The process of making water, soil, food, or another substance unsafe or impure by introducing pollutants or harmful materials.", example: "Industrial activity can cause water contamination." },
  { word: "Crop yields", meaning: "The amount of crops produced", explanation: "The quantity of agricultural products produced from a particular area of land.", example: "Better irrigation can increase crop yields." },
  { word: "Cultivate", meaning: "To prepare and use land for growing crops", explanation: "To prepare, develop, or work land so that crops can be grown.", example: "Farmers cultivate the land before planting seeds." },
  { word: "Data", meaning: "Facts and information", explanation: "Facts and statistics collected together for reference or analysis.", example: "The study is based on data collected over ten years." },
  { word: "Decline of species", meaning: "A significant reduction in the population of a species", explanation: "A gradual or rapid decrease in the number, range, or overall population of a particular species.", example: "Pollution and habitat loss have contributed to the decline of several species." },
  { word: "Decompose", meaning: "To break down naturally into simpler materials", explanation: "To decay and gradually break down into simpler substances through natural biological processes.", example: "Organic waste decomposes more quickly under suitable conditions." },
  { word: "Deforestation", meaning: "The large-scale removal of forests", explanation: "The process of cutting down forests and converting the land to other uses.", example: "Deforestation can lead to habitat loss and soil erosion." },
  { word: "Demolish", meaning: "To destroy a building deliberately", explanation: "To knock down or completely destroy a building or structure.", example: "The old building will be demolished next year." },
  { word: "Demolition", meaning: "The act of destroying a building", explanation: "The process of deliberately knocking down a building or structure.", example: "The demolition of the damaged building took several days." },
  { word: "Devastating effect", meaning: "An effect that causes extremely serious damage", explanation: "A consequence that produces widespread or severe damage to people, ecosystems, property, or resources.", example: "The destruction of natural habitats can have a devastating effect on wildlife." },
  { word: "Develop", meaning: "To grow or improve gradually", explanation: "To grow, change, or improve gradually over time.", example: "The government aims to develop the country's transport network." },
  { word: "Do up a property", meaning: "To repair and improve a property", explanation: "To renovate a house or other property so that it becomes more attractive or functional.", example: "They bought an old house and plan to do it up." },
  { word: "Domestic", meaning: "Relating to one's own country or home", explanation: "Relating to a person's own country, or to the home rather than abroad.", example: "The policy focuses on both domestic and foreign investment." },
  { word: "Dream home", meaning: "A home that someone ideally wants to live in", explanation: "The type of house or property that someone imagines as their ideal place to live.", example: "They are saving money to buy their dream home." },
  { word: "Drought", meaning: "A long period with unusually little rainfall", explanation: "A prolonged period of unusually dry weather that causes a shortage of water.", example: "The drought reduced agricultural production." },
  { word: "Ecosystem", meaning: "A system of interacting organisms and their physical environment", explanation: "A biological community in which organisms interact with one another and with the non-living elements of their environment.", example: "Removing one important species can affect the stability of the entire ecosystem." },
  { word: "Endangered species", meaning: "Species at serious risk of extinction", explanation: "Plants or animals whose populations have become small enough that they face a significant risk of disappearing.", example: "Many endangered species require habitat protection." },
  { word: "Eradicate", meaning: "To completely remove or destroy something harmful", explanation: "To get rid of something completely, especially a disease, pest, or unwanted species.", example: "Scientists are trying to eradicate the disease from the region." },
  { word: "Establish", meaning: "To set up or create", explanation: "To set up or create an organisation, system, or relationship on a firm basis.", example: "The university was established over a century ago." },
  { word: "Evaporation", meaning: "The process in which liquid becomes gas", explanation: "The process by which a liquid changes into a gas, usually because of heat.", example: "Evaporation increases when temperatures rise." },
  { word: "Exterminate", meaning: "To destroy all members of a group or species", explanation: "To kill or remove every member of a particular group, usually referring to pests or unwanted organisms.", example: "The authorities tried to exterminate the invasive insects." },
  { word: "Fertile", meaning: "Able to produce healthy plants or crops", explanation: "Describes soil that contains enough nutrients to support strong plant growth.", example: "The farmers were able to grow crops successfully because the soil was fertile." },
  { word: "Fertility", meaning: "The ability of soil to support plant growth", explanation: "The quality of soil that determines how well it can provide plants with nutrients and support their growth.", example: "Adding organic matter can improve soil fertility." },
  { word: "Fertilize", meaning: "To add nutrients to soil", explanation: "To improve soil by adding substances that provide nutrients needed for plant growth.", example: "Farmers fertilize the soil before planting their crops." },
  { word: "Fertilizer", meaning: "A substance added to soil to improve plant growth", explanation: "A natural or synthetic substance containing nutrients that help plants grow.", example: "The farmer applied fertilizer to improve crop growth." },
  { word: "First-time buyer", meaning: "A person buying a property for the first time", explanation: "Someone who is purchasing a home or property for the first time.", example: "First-time buyers may need financial support to afford a home." },
  { word: "Fishing industry", meaning: "The economic activity connected with catching and selling fish", explanation: "The sector involved in catching, processing, transporting, and selling fish and other aquatic products.", example: "The fishing industry provides employment for many coastal communities." },
  { word: "Fishing quotas", meaning: "Official limits on the amount of fish that may be caught", explanation: "Regulatory limits established to control fishing activity and help maintain sustainable fish populations.", example: "Strict fishing quotas can help prevent the collapse of fish populations." },
  { word: "Flora and fauna", meaning: "The plants and animals of a particular area", explanation: "Flora refers to plant life, while fauna refers to animal life in a particular region or environment.", example: "The national park is famous for its rich flora and fauna." },
  { word: "Fossil fuels", meaning: "Coal, oil, and natural gas formed from ancient organic matter", explanation: "Non-renewable energy sources formed over millions of years from the remains of ancient organisms.", example: "Burning fossil fuels releases greenhouse gases." },
  { word: "Fully furnished", meaning: "Containing all the necessary furniture", explanation: "A property that already contains the main furniture needed for living.", example: "The student rented a fully furnished apartment." },
  { word: "Global", meaning: "Relating to the whole world", explanation: "Relating to or affecting the whole world.", example: "Climate change is regarded as a global problem." },
  { word: "GM food", meaning: "Food made from genetically modified organisms", explanation: "Food produced from plants or animals whose genetic material has been deliberately changed using biotechnology.", example: "There is ongoing debate about the environmental effects of GM food." },
  { word: "Goal", meaning: "An aim or desired result", explanation: "The object of a person's ambition or effort; an aim or desired result.", example: "The team set an ambitious goal for next year." },
  { word: "Habitat", meaning: "The natural environment in which an organism lives", explanation: "The specific environment that provides a species with the conditions, food, shelter, and resources required for survival.", example: "Urban expansion has resulted in the destruction of many natural habitats." },
  { word: "Hall of residence", meaning: "A building where university students live", explanation: "Student accommodation provided by or associated with a university.", example: "She lives in a university hall of residence." },
  { word: "Hazardous waste", meaning: "Waste that presents serious risks to health or the environment", explanation: "Waste containing toxic, corrosive, flammable, infectious, or otherwise dangerous materials.", example: "Hazardous waste requires specialised treatment and disposal." },
  { word: "Herbicides", meaning: "Chemicals used to kill unwanted plants", explanation: "Chemicals specifically designed to control or destroy weeds and other unwanted plants.", example: "Some farmers use herbicides to control weeds between crops." },
  { word: "High-rise buildings", meaning: "Very tall buildings with many floors", explanation: "Buildings that contain many levels and are significantly taller than surrounding structures.", example: "High-rise buildings are common in densely populated cities." },
  { word: "Home comforts", meaning: "Things that make a home comfortable", explanation: "Familiar objects, facilities, and comforts that make people feel relaxed and at home.", example: "After travelling for months, he missed the home comforts." },
  { word: "Home-grown", meaning: "Produced or grown locally", explanation: "Something grown or produced in the local area rather than imported from another place.", example: "The restaurant uses home-grown vegetables." },
  { word: "House-hunting", meaning: "The activity of searching for a home", explanation: "The process of looking for a suitable house or apartment to buy or rent.", example: "They spent the weekend house-hunting." },
  { word: "House-warming party", meaning: "A party held after moving into a new home", explanation: "A social gathering organised to celebrate moving into a new house or apartment.", example: "We are having a house-warming party on Saturday." },
  { word: "Identify", meaning: "To recognise or establish", explanation: "To establish or recognise the identity or nature of someone or something.", example: "Scientists were able to identify the cause of the disease." },
  { word: "Immunity", meaning: "The ability to resist a disease or harmful substance", explanation: "The body's ability to protect itself against particular diseases or infections.", example: "Some animals develop immunity to certain diseases." },
  { word: "Impact", meaning: "A strong effect or influence", explanation: "A marked effect or influence that one thing has on another.", example: "The new law had a significant impact on small businesses." },
  { word: "Incineration", meaning: "The controlled burning of waste at high temperatures", explanation: "A waste-treatment process in which waste is burned under controlled conditions, often to reduce its volume or recover energy.", example: "Incineration can reduce the amount of waste sent to landfill." },
  { word: "Increase", meaning: "To make bigger", explanation: "To make something greater in size, amount, or degree.", example: "The company plans to increase production next year." },
  { word: "Indicate", meaning: "To point out or show", explanation: "To point out, show, or suggest something as a sign or symptom.", example: "Recent statistics indicate a rise in youth unemployment." },
  { word: "Individual", meaning: "A single person", explanation: "A single human being considered separately from a group.", example: "Each individual has the right to express their opinion." },
  { word: "Infertile", meaning: "Unable to support good plant growth", explanation: "Describes soil that lacks the nutrients or conditions necessary for healthy crops.", example: "The land became infertile after years of poor farming practices." },
  { word: "Infrastructure", meaning: "Basic physical systems of a society", explanation: "The basic physical and organisational structures needed for a society to operate, such as roads and power supplies.", example: "The government invested heavily in transport infrastructure." },
  { word: "Inner-city", meaning: "The central urban area of a city", explanation: "The area close to the centre of a city, often containing older buildings and dense populations.", example: "The government is investing in inner-city regeneration." },
  { word: "Insecticides", meaning: "Chemicals used to kill harmful insects", explanation: "Substances used to control insects that can damage crops or spread disease.", example: "Insecticides can reduce damage caused by crop pests." },
  { word: "Intensive farming methods", meaning: "Highly productive farming methods using large amounts of resources", explanation: "Agricultural methods designed to produce very high yields from limited land, often through intensive use of fertilizers, pesticides, machinery, or water.", example: "Intensive farming methods can increase production but may put pressure on natural resources." },
  { word: "Invasive species", meaning: "Species introduced to an area that can harm native ecosystems", explanation: "Plants or animals introduced to an environment where they can spread rapidly and cause ecological or economic harm.", example: "Invasive species can compete with native animals for food and habitat." },
  { word: "Limit", meaning: "A restriction on amount or extent", explanation: "A point or level beyond which something does not or may not pass.", example: "The government imposed a limit on carbon emissions." },
  { word: "Live on campus", meaning: "To live within a university campus", explanation: "To live in accommodation located on or directly connected to a university campus.", example: "Many international students choose to live on campus." },
  { word: "Maintain", meaning: "To keep something in good condition", explanation: "To cause something to continue in its existing state or condition.", example: "It is important to maintain a healthy work-life balance." },
  { word: "Marine mammals", meaning: "Mammals adapted to living in marine environments", explanation: "Mammals such as whales, dolphins, and seals that depend on oceans or other marine environments for much of their lives.", example: "Chemical pollution can accumulate in marine mammals." },
  { word: "Migration", meaning: "movement of people", explanation: "The movement of people from one place or country to another, often for work, education, safety, or better living conditions.", example: "Migration from rural areas to cities has increased significantly in recent decades." },
  { word: "Mobile home", meaning: "A movable residential structure", explanation: "A prefabricated home designed to be moved from one location to another.", example: "The family lives in a mobile home." },
  { word: "Mod cons", meaning: "Modern conveniences and household features", explanation: "Modern facilities and equipment that make a home more comfortable and convenient.", example: "The apartment has all the mod cons, including a modern kitchen." },
  { word: "Monocrops", meaning: "Large areas devoted to growing a single crop", explanation: "An agricultural system in which one crop is grown extensively over a large area or repeatedly on the same land.", example: "Monocrops can make farms particularly vulnerable to diseases and pests." },
  { word: "Mortgage", meaning: "A loan used to buy property", explanation: "A long-term loan from a bank or lender used to purchase a house or other property.", example: "They took out a mortgage to buy their first home." },
  { word: "Native species", meaning: "Species naturally found in a particular area", explanation: "Plants or animals that naturally occur in a particular region rather than being introduced from somewhere else.", example: "The project aims to protect native species." },
  { word: "Natural disasters", meaning: "Extreme natural events capable of causing widespread damage", explanation: "Severe events such as earthquakes, floods, droughts, or storms that can cause major environmental and human impacts.", example: "Natural disasters can cause long-term damage to ecosystems and infrastructure." },
  { word: "Natural resource", meaning: "A useful material or substance provided by nature", explanation: "A material or source of energy found in nature that people use, such as water, forests, minerals, or fossil fuels.", example: "Fresh water is an important natural resource." },
  { word: "Nonrenewable resource", meaning: "A finite natural resource that cannot be rapidly replaced", explanation: "A natural resource that exists in limited quantities and takes extremely long periods to form.", example: "Fossil fuels are nonrenewable resources." },
  { word: "Occur", meaning: "To happen", explanation: "To happen or take place, especially without being planned.", example: "Such accidents rarely occur on this stretch of road." },
  { word: "Office blocks", meaning: "Large buildings containing offices", explanation: "Buildings designed mainly to provide working spaces for businesses and organisations.", example: "Several modern office blocks have been built in the city centre." },
  { word: "Option", meaning: "A thing that may be chosen", explanation: "A thing that is or may be chosen from a set of possibilities.", example: "Renting remains a popular option for young professionals." },
  { word: "Organic farming", meaning: "Farming based on natural methods", explanation: "A farming system that uses natural processes and generally avoids synthetic fertilizers and pesticides.", example: "Organic farming can help maintain healthy soil." },
  { word: "Organic produce", meaning: "Food produced without most synthetic chemicals", explanation: "Food grown or produced using farming methods that avoid many synthetic pesticides and fertilizers.", example: "Many consumers prefer organic produce because they want food produced with fewer synthetic chemicals." },
  { word: "Overfishing", meaning: "The removal of fish at an unsustainable rate", explanation: "Fishing at a level that reduces fish populations faster than they can reproduce and recover.", example: "Overfishing has contributed to the decline of several marine species." },
  { word: "Own your own home", meaning: "To have legal ownership of the home you live in", explanation: "To possess a property as its legal owner rather than renting it.", example: "Many people hope to own their own home one day." },
  { word: "Parasites", meaning: "Organisms that live on or in another organism and benefit from it", explanation: "Living organisms that obtain food or other benefits from a host while usually causing some harm to it.", example: "Some parasites can cause serious diseases in animals." },
  { word: "Pay rent in advance", meaning: "To pay rent before the rental period begins", explanation: "To make a rental payment before the period for which the property will be occupied.", example: "The landlord asked us to pay rent in advance." },
  { word: "Period", meaning: "A length of time", explanation: "A particular length of time in the history of something.", example: "The economy grew steadily during this period." },
  { word: "Permanent address", meaning: "The address where someone normally lives permanently", explanation: "A fixed address used as a person's main or long-term place of residence.", example: "Please provide your permanent address on the application form." },
  { word: "Pesticides", meaning: "Chemicals used to control harmful organisms", explanation: "Substances used in agriculture to control insects, weeds, fungi, or other organisms that can damage crops.", example: "Farmers use pesticides to protect crops from pests." },
  { word: "Polar ice caps", meaning: "Large masses of ice covering polar regions", explanation: "Extensive areas of permanent or long-lasting ice found around the Earth's polar regions.", example: "The melting of polar ice caps can contribute to changes in sea level." },
  { word: "Policy", meaning: "A course of action adopted by an organisation", explanation: "A course or principle of action adopted or proposed by a government or organisation.", example: "The new policy aims to reduce plastic waste." },
  { word: "Pollinate", meaning: "To transfer pollen so that a plant can reproduce", explanation: "To move pollen from one part of a flower to another, allowing fertilisation and seed production.", example: "Bees help pollinate many agricultural crops." },
  { word: "Pollination", meaning: "The transfer of pollen that enables plant reproduction", explanation: "The biological process in which pollen reaches the reproductive part of a flower, allowing fertilisation and seed production.", example: "A decline in pollinating insects could seriously affect crop production." },
  { word: "Pollutants", meaning: "Harmful substances that contaminate the environment", explanation: "Substances that make air, water, or soil dirty or harmful to living organisms.", example: "Industrial pollutants can enter rivers and damage aquatic ecosystems." },
  { word: "Positive", meaning: "Good or favourable", explanation: "Good, favourable, or constructive in nature.", example: "The trial produced positive results for most participants." },
  { word: "Potential", meaning: "Capable of developing in future", explanation: "Having the capacity to develop or happen in the future.", example: "The region has great potential for renewable energy production." },
  { word: "Predators", meaning: "Animals that hunt other animals", explanation: "Animals that naturally hunt, kill, and eat other animals for food.", example: "Large predators play an important role in maintaining ecosystem balance." },
  { word: "Preservation", meaning: "The protection of something from damage or destruction", explanation: "The act of protecting buildings, environments, or other important things so that they remain in good condition.", example: "The preservation of historic buildings is important to the city." },
  { word: "Previous", meaning: "Coming before in time", explanation: "Existing or occurring before the one in question.", example: "Sales this year were higher than in the previous year." },
  { word: "Principle", meaning: "A fundamental rule or belief", explanation: "A fundamental truth or proposition that serves as the foundation for a system of belief or behaviour.", example: "Fairness is a basic principle of the justice system." },
  { word: "Process", meaning: "A series of actions", explanation: "A series of actions or steps taken to achieve a particular result.", example: "Manufacturing this product involves a complex process." },
  { word: "Property ladder", meaning: "The progression from one property to more valuable properties", explanation: "The idea of buying increasingly valuable homes as a person's financial situation improves.", example: "Many young buyers hope to get onto the property ladder." },
  { word: "Property market", meaning: "The buying, selling, and renting of properties", explanation: "The economic market in which residential and commercial properties are bought, sold, and rented.", example: "Interest rates can influence the property market." },
  { word: "Raise", meaning: "To grow or keep animals or crops", explanation: "To grow plants or care for animals, usually for food or another agricultural purpose.", example: "The family raises chickens on their farm." },
  { word: "Raw materials", meaning: "Basic materials used to make products", explanation: "Natural or partly processed materials that are used as inputs in manufacturing.", example: "Recycling reduces the need for some new raw materials." },
  { word: "Rear", meaning: "To raise animals for a particular purpose", explanation: "To care for and raise animals, especially livestock, until they are mature.", example: "The farmers rear cattle for milk production." },
  { word: "Reduce", meaning: "To make smaller", explanation: "To make something smaller in size, amount, or degree.", example: "The city introduced measures to reduce traffic congestion." },
  { word: "Relevant", meaning: "Closely connected to the matter", explanation: "Closely connected or appropriate to the matter being considered.", example: "Only relevant information should be included in the report." },
  { word: "Renewable energy", meaning: "Energy from sources that naturally replace themselves", explanation: "Energy produced from sources such as sunlight, wind, and water that can naturally be replenished.", example: "Renewable energy can reduce dependence on fossil fuels." },
  { word: "Rented accommodation", meaning: "A home or room rented from another person or organisation", explanation: "Housing that someone pays to use without owning the property.", example: "Many students live in rented accommodation." },
  { word: "Requirement", meaning: "Something that is needed", explanation: "A thing that is needed or wanted; a necessary condition.", example: "Applicants must meet the minimum requirements for the job." },
  { word: "Research", meaning: "Systematic investigation", explanation: "The systematic study of materials and sources to establish facts and reach conclusions.", example: "Further research is needed before any conclusions can be drawn." },
  { word: "Reservoir", meaning: "A place where water is stored", explanation: "A natural or artificial body of water used to store water, often for public supply or irrigation.", example: "The reservoir provides drinking water to the city." },
  { word: "Resistance", meaning: "The ability to withstand something harmful", explanation: "The ability of an organism or system to resist the effects of a harmful substance, disease, or environmental pressure.", example: "Some insects have developed resistance to certain pesticides." },
  { word: "Restoration", meaning: "The process of returning something to its former condition", explanation: "The work of repairing and preserving something so that it returns to an earlier or intended condition.", example: "The restoration of the historic building took several years." },
  { word: "Rubbish", meaning: "Waste or unwanted material", explanation: "An informal British English word for things that people no longer want and throw away.", example: "The council collects household rubbish every week." },
  { word: "Runoff", meaning: "Water flowing over land after rainfall or melting", explanation: "Water that moves across the surface of the land and may carry soil, nutrients, or pollutants into rivers and lakes.", example: "Agricultural runoff can introduce excess nutrients into waterways." },
  { word: "Sea level rise", meaning: "An increase in the average level of the world's oceans", explanation: "A long-term rise in average sea levels caused by factors including warming oceans and melting land ice.", example: "Sea level rise threatens some coastal communities." },
  { word: "Sector", meaning: "A distinct part of an economy or society", explanation: "A distinct part or branch of an economy, society, or activity.", example: "The service sector accounts for most jobs in the country." },
  { word: "Sewage", meaning: "Wastewater containing human waste", explanation: "Wastewater from toilets, homes, and other buildings that usually needs treatment before disposal.", example: "Untreated sewage can contaminate rivers." },
  { word: "Soil erosion", meaning: "The gradual removal of soil by natural forces", explanation: "The loss of the upper layer of soil caused by processes such as wind, rainfall, flooding, or human activity.", example: "Deforestation can accelerate soil erosion on steep slopes." },
  { word: "Solid waste", meaning: "Unwanted solid material that is discarded", explanation: "Waste materials that are mainly solid rather than liquid or gaseous.", example: "Cities need effective systems for managing solid waste." },
  { word: "Source reduction", meaning: "The prevention or reduction of waste at its source", explanation: "An approach that reduces the quantity or harmfulness of waste before products become waste.", example: "Source reduction is often more effective than dealing with waste after it has been produced." },
  { word: "Species distribution", meaning: "The geographical pattern of where a species occurs", explanation: "The way individuals of a species are spread across different geographical areas or habitats.", example: "Climate change may significantly alter the distribution of species." },
  { word: "Species diversity", meaning: "The variety and relative abundance of species in an ecosystem", explanation: "A measure describing how many different species are present and how their populations are distributed within an environment.", example: "Tropical forests are known for their exceptionally high species diversity." },
  { word: "Strategy", meaning: "A plan to achieve a goal", explanation: "A plan of action designed to achieve a long-term or overall goal.", example: "The company adopted a new marketing strategy this year." },
  { word: "Student digs", meaning: "Informal term for student accommodation", explanation: "An informal expression referring to a place where a student lives.", example: "Her student digs are close to the university." },
  { word: "Support", meaning: "To help or back something", explanation: "To give assistance, encouragement, or approval to someone or something.", example: "Local charities support families in financial difficulty." },
  { word: "Sustainable farming", meaning: "Farming that can continue without seriously damaging the environment", explanation: "Agricultural practices designed to produce food while protecting natural resources and environmental health over the long term.", example: "Sustainable farming aims to protect soil and water for future generations." },
  { word: "Sustainable materials", meaning: "Materials produced with relatively low environmental impact", explanation: "Materials selected or produced in ways intended to reduce environmental damage and conserve resources.", example: "The architects used sustainable materials in the new building." },
  { word: "Synthetic fertilizers", meaning: "Artificially manufactured substances that provide nutrients to crops", explanation: "Industrial fertilizers formulated to supply plants with nutrients such as nitrogen, phosphorus, or potassium.", example: "Excessive use of synthetic fertilizers can contribute to water pollution." },
  { word: "Theory", meaning: "An idea that explains something", explanation: "A supposition or system of ideas intended to explain something.", example: "Scientists proposed a new theory to explain the phenomenon." },
  { word: "Threat to survival", meaning: "A factor that puts continued existence at risk", explanation: "A condition or external pressure that increases the possibility that a species or population will disappear.", example: "Habitat destruction represents a major threat to the survival of many species." },
  { word: "Threatened species", meaning: "Species facing a significant risk of becoming endangered", explanation: "Species whose populations or habitats are under enough pressure that their future survival may be at risk.", example: "Conservation programmes aim to protect threatened species from further population decline." },
  { word: "Transport", meaning: "The movement of people or goods", explanation: "The movement of people or goods from one place to another.", example: "Public transport in the city has improved significantly." },
  { word: "Unprecedented", meaning: "Never experienced or observed before", explanation: "Something that is completely new or more extreme than anything previously recorded or experienced.", example: "The region experienced unprecedented levels of flooding." },
  { word: "Vandalism", meaning: "deliberate property damage", explanation: "The deliberate destruction or damage of public or private property.", example: "The city increased surveillance after repeated incidents of vandalism." },
  { word: "Vary", meaning: "To differ or change", explanation: "To differ in size, amount, or degree from one instance to another.", example: "Prices vary considerably depending on the season." },
  { word: "Volunteers", meaning: "People who freely offer their time to help", explanation: "People who choose to work or help without necessarily receiving payment.", example: "Volunteers helped clean the damaged area." },
  { word: "Waste collection", meaning: "The process of collecting waste", explanation: "The service through which household, commercial, or other waste is collected and transported for treatment or disposal.", example: "Regular waste collection helps keep neighbourhoods clean." },
  { word: "Waste disposal", meaning: "The process of getting rid of waste", explanation: "The final treatment or removal of waste after it has been collected.", example: "Safe waste disposal is essential for public health." },
  { word: "Waste management", meaning: "The systematic collection, treatment, recycling, and disposal of waste", explanation: "The organised process of controlling waste from the point at which it is produced to its final treatment or disposal.", example: "Effective waste management is essential for reducing environmental pollution." },
  { word: "Water consumption", meaning: "The amount of water used", explanation: "The quantity of water used by individuals, households, agriculture, industry, or other activities.", example: "Reducing household water consumption can conserve resources." },
  { word: "Water shortage", meaning: "A situation in which there is not enough water", explanation: "A lack of sufficient water to meet the needs of people, agriculture, industry, or ecosystems.", example: "The region is experiencing a serious water shortage." },
  { word: "Water supply system", meaning: "A system that provides water to people", explanation: "The infrastructure used to collect, treat, transport, and distribute water to homes and other users.", example: "The city is upgrading its water supply system." },
  { word: "Water withdrawal", meaning: "The extraction of water from natural sources", explanation: "The process of removing water from rivers, lakes, reservoirs, or underground sources for human use.", example: "Excessive water withdrawal can reduce the amount of water available to ecosystems." },
  { word: "Weeds", meaning: "Unwanted plants growing among crops", explanation: "Plants that grow where they are not wanted, especially among agricultural crops.", example: "Farmers need to control weeds so that crops can grow properly." },
  { word: "Wipe out", meaning: "To destroy or eliminate something completely", explanation: "To completely destroy a population, group, or system.", example: "The disease could wipe out a large part of the population." },
  { word: "Alleviate", meaning: "To make suffering less severe", explanation: "To make suffering, a problem, or a symptom less severe.", example: "The new medicine helped alleviate the patient's pain." },
  { word: "Ambiguous", meaning: "Open to more than one interpretation", explanation: "Open to more than one interpretation; not having a clear meaning.", example: "The wording of the contract was deliberately ambiguous." },
  { word: "Arbitrary", meaning: "Based on random choice", explanation: "Based on random choice or personal whim rather than reason or system.", example: "Critics claimed the rule was arbitrary and unfair." },
  { word: "Benevolent", meaning: "Kind and generous", explanation: "Well meaning and kindly, especially generous towards others.", example: "The charity relies on donations from benevolent supporters." },
  { word: "Biodiversity", meaning: "The variety of living organisms within an ecosystem", explanation: "The range of different plants, animals, and other organisms found in a particular environment.", example: "The destruction of forests can cause a significant loss of biodiversity." },
  { word: "Carbon cuts", meaning: "Reductions in carbon emissions", explanation: "Measures or reductions intended to decrease the amount of carbon dioxide and other carbon-related greenhouse gases released into the atmosphere.", example: "Governments have introduced policies aimed at achieving substantial carbon cuts." },
  { word: "Coastal erosion", meaning: "The gradual loss of land along a coast", explanation: "The wearing away and removal of coastal land caused by waves, currents, storms, and other processes.", example: "Rising sea levels may accelerate coastal erosion." },
  { word: "Cogent", meaning: "Clear and convincing", explanation: "Clear, logical, and convincing.", example: "She presented a cogent argument in favour of the reform." },
  { word: "Coherent", meaning: "Logical and consistent", explanation: "Logical and consistent, so that the parts fit together well.", example: "The essay presented a clear and coherent argument." },
  { word: "Conservation", meaning: "The protection and careful management of natural resources", explanation: "The protection, preservation, and responsible management of wildlife, habitats, ecosystems, and natural resources.", example: "Conservation efforts have helped restore several endangered populations." },
  { word: "Contend", meaning: "To assert or argue", explanation: "To assert something as a position in an argument.", example: "Critics contend that the policy will harm small businesses." },
  { word: "Convoluted", meaning: "Extremely complex and difficult to follow", explanation: "Extremely complex and difficult to follow.", example: "The instructions were so convoluted that nobody understood them." },
  { word: "Delineate", meaning: "To describe or outline precisely", explanation: "To describe, portray, or outline something precisely.", example: "The report delineates the responsibilities of each department." },
  { word: "Discern", meaning: "To perceive or recognise clearly", explanation: "To perceive or recognise something clearly, often with difficulty.", example: "It was hard to discern any pattern in the data." },
  { word: "Ecological balance", meaning: "A relatively stable relationship between organisms and their environment", explanation: "A condition in which interactions among organisms and environmental factors maintain a relatively stable ecosystem.", example: "Removing predators can disturb the ecological balance of an ecosystem." },
  { word: "Elucidate", meaning: "To make something clear", explanation: "To make something clear by explaining it in more detail.", example: "The lecturer elucidated the complex theory with simple examples." },
  { word: "Environmental degradation", meaning: "The deterioration of the natural environment", explanation: "The gradual or severe decline in environmental quality caused by pollution, resource depletion, habitat destruction, or other pressures.", example: "Rapid urbanisation can contribute to environmental degradation." },
  { word: "Environmentalists", meaning: "People who work to protect the natural environment", explanation: "People who advocate for the protection of ecosystems, natural resources, wildlife, and environmental quality.", example: "Environmentalists have raised concerns about the project's impact on local wildlife." },
  { word: "Ephemeral", meaning: "Lasting for a very short time", explanation: "Lasting for a very short time; short-lived.", example: "Fame in the industry can often be ephemeral." },
  { word: "Exacerbate", meaning: "To make a problem worse", explanation: "To make a problem, situation, or feeling worse.", example: "Poor drainage can exacerbate the risk of flooding." },
  { word: "Expedite", meaning: "To make something happen faster", explanation: "To make a process happen more quickly.", example: "The new system was designed to expedite customs clearance." },
  { word: "Facilitate", meaning: "To make an action easier", explanation: "To make an action or process easier or more likely to happen.", example: "New technology has facilitated communication across the globe." },
  { word: "Groundwater contamination", meaning: "Pollution of underground water sources", explanation: "The introduction of harmful substances into groundwater, potentially making it unsafe for humans and ecosystems.", example: "Chemical leakage can lead to serious groundwater contamination." },
  { word: "Habitat loss", meaning: "The destruction or reduction of a natural living environment", explanation: "The process through which an area that provides the conditions required by a species is destroyed, fragmented, or significantly changed.", example: "Habitat loss is one of the major causes of biodiversity decline." },
  { word: "Human-induced climate change", meaning: "Climate change caused or significantly influenced by human activities", explanation: "Long-term changes in climate resulting from human activities, particularly the release of greenhouse gases.", example: "Human-induced climate change is affecting ecosystems around the world." },
  { word: "Hypothesis", meaning: "A proposed explanation", explanation: "A proposed explanation made as a starting point for further investigation.", example: "The researchers tested their hypothesis through a series of experiments." },
  { word: "Idiosyncratic", meaning: "Peculiar to an individual", explanation: "Relating to a way of behaving or thinking that is peculiar to a particular person.", example: "The author's idiosyncratic writing style set him apart." },
  { word: "Implement", meaning: "To put a plan into effect", explanation: "To put a decision, plan, or agreement into effect.", example: "The company will implement new safety procedures next month." },
  { word: "Implicit", meaning: "Suggested but not directly stated", explanation: "Implied though not plainly expressed; understood without being stated.", example: "There was an implicit assumption that everyone agreed." },
  { word: "Ineffable", meaning: "Too great to be expressed in words", explanation: "Too great or extreme to be expressed or described in words.", example: "The view from the summit had an almost ineffable beauty." },
  { word: "Inevitable", meaning: "Certain to happen", explanation: "Certain to happen and unable to be avoided or prevented.", example: "Some economists believe a slowdown is now inevitable." },
  { word: "Inherent", meaning: "Existing as a natural part", explanation: "Existing as a natural or essential part of something.", example: "Risk is inherent in almost every business decision." },
  { word: "International implications", meaning: "Effects or consequences that extend across countries", explanation: "Consequences of an event, policy, or problem that affect several countries or require international attention.", example: "Climate change has significant international implications." },
  { word: "Juxtapose", meaning: "To place side by side for contrast", explanation: "To place two or more things side by side, especially to emphasise a contrast.", example: "The exhibition juxtaposes traditional and modern art." },
  { word: "Leachate", meaning: "Polluted liquid produced by water moving through waste", explanation: "A contaminated liquid formed when water passes through waste and dissolves or carries pollutants with it.", example: "Improperly managed landfill sites can release toxic leachate." },
  { word: "Magnanimous", meaning: "Generous and forgiving", explanation: "Generous or forgiving, especially towards a rival or someone less powerful.", example: "The winning team was magnanimous in victory." },
  { word: "Meticulous", meaning: "Extremely careful and precise", explanation: "Showing great attention to detail; very careful and precise.", example: "The scientist kept meticulous records of every experiment." },
  { word: "Mitigate", meaning: "To make something less severe", explanation: "To make something less severe, serious, or painful.", example: "Engineers are working to mitigate the effects of flooding." },
  { word: "Multitudinous", meaning: "Extremely numerous", explanation: "Existing in great numbers; very numerous.", example: "The report examines the multitudinous causes of the crisis." },
  { word: "Myriad", meaning: "A very large number", explanation: "A countless or extremely great number of something.", example: "The city offers a myriad of cultural attractions." },
  { word: "Obsolete", meaning: "No longer in use", explanation: "No longer produced or used; out of date.", example: "Many older technologies quickly become obsolete." },
  { word: "Paradigm", meaning: "A typical example or pattern", explanation: "A typical example or pattern of something; a model.", example: "The discovery led to a paradigm shift in physics." },
  { word: "Permanent solution", meaning: "A solution intended to solve a problem for the long term", explanation: "A measure designed to address a problem in a lasting way rather than temporarily reducing its effects.", example: "The government is looking for a permanent solution to the waste problem." },
  { word: "Pervasive", meaning: "Spreading widely through something", explanation: "Spreading widely throughout an area or a group of people.", example: "Corruption remained pervasive throughout the institution." },
  { word: "Pragmatic", meaning: "Practical and realistic", explanation: "Dealing with things in a practical and realistic way rather than by theory.", example: "The negotiators took a pragmatic approach to the dispute." },
  { word: "Precipitation", meaning: "Water that falls from the atmosphere to the Earth's surface", explanation: "Any form of water that falls from clouds, including rain, snow, sleet, and hail.", example: "Changes in precipitation can affect agricultural production." },
  { word: "Proponents", meaning: "People who publicly support an idea or proposal", explanation: "Individuals or groups who argue in favour of a particular policy, idea, method, or position.", example: "Proponents of renewable energy argue that it can reduce dependence on fossil fuels." },
  { word: "Querulous", meaning: "Complaining in a whining manner", explanation: "Complaining in a petulant or whining manner.", example: "The querulous customer complained about every small detail." },
  { word: "Recalcitrant", meaning: "Stubbornly resistant to authority", explanation: "Having an obstinately uncooperative attitude towards authority.", example: "The recalcitrant employee refused to follow new procedures." },
  { word: "Reinforce", meaning: "To strengthen", explanation: "To strengthen or support something, especially an idea or feeling.", example: "The results reinforce previous findings on the subject." },
  { word: "Renewable resource", meaning: "A natural resource that can be naturally replenished", explanation: "A resource that can be replaced naturally within a relatively short period compared with the rate at which it is consumed.", example: "Solar energy is considered a renewable resource." },
  { word: "Resilient", meaning: "Able to recover quickly", explanation: "Able to withstand or recover quickly from difficult conditions.", example: "Local economies proved remarkably resilient after the crisis." },
  { word: "Reverse global warming", meaning: "To reduce or counteract the processes causing global warming", explanation: "To take action intended to slow, reduce, or potentially reverse some effects or causes of long-term global temperature increases.", example: "Researchers are investigating technologies that could help reverse some effects of global warming." },
  { word: "Sagacious", meaning: "Having good judgement", explanation: "Having or showing keen mental discernment and good judgement.", example: "The sagacious advisor guided the company through the crisis." },
  { word: "Scrupulous", meaning: "Very careful and thorough", explanation: "Very careful, thorough, and precise, especially about moral matters.", example: "The accountant was scrupulous about checking every figure." },
  { word: "Subordinate", meaning: "Lower in rank or importance", explanation: "Lower in rank, position, or importance than someone or something else.", example: "Regional offices are subordinate to the central headquarters." },
  { word: "Subsequent", meaning: "Coming after in time", explanation: "Coming after something in time; following.", example: "Subsequent studies confirmed the original findings." },
  { word: "Sustainable development", meaning: "Development that meets present needs without undermining future needs", explanation: "Development that seeks to improve human well-being while maintaining environmental resources and opportunities for future generations.", example: "Sustainable development requires cooperation between governments, businesses, and communities." },
  { word: "Taciturn", meaning: "Reserved and saying little", explanation: "Reserved or uncommunicative in speech; saying little.", example: "The taciturn manager rarely spoke during meetings." },
  { word: "Tenacious", meaning: "Persistent and determined", explanation: "Persistent and determined in pursuing a goal.", example: "Her tenacious approach eventually won the case." },
  { word: "Ubiquitous", meaning: "Present everywhere", explanation: "Present, appearing, or found everywhere at the same time.", example: "Smartphones have become ubiquitous in modern society." },
  { word: "Venerable", meaning: "Deserving great respect", explanation: "Accorded great respect because of age, wisdom, or achievement.", example: "The venerable professor had taught at the university for decades." },
  { word: "Verbatim", meaning: "In exactly the same words", explanation: "In exactly the same words as were used originally.", example: "The witness repeated the conversation verbatim." },
  { word: "Viable", meaning: "Capable of working successfully", explanation: "Capable of working successfully; feasible.", example: "Solar energy is now a viable alternative to coal." },
  { word: "Vindicate", meaning: "To clear from blame", explanation: "To clear someone of blame or suspicion, or to prove a claim was correct.", example: "The report ultimately vindicated the company's safety record." },
  { word: "Vindictive", meaning: "Having a strong desire for revenge", explanation: "Having or showing a strong desire for revenge.", example: "His vindictive behaviour damaged relationships with colleagues." },
  { word: "Voracious", meaning: "Having a very eager approach", explanation: "Having a very great appetite or desire for something.", example: "She has always been a voracious reader." },
  { word: "Water conservation", meaning: "The careful protection and efficient use of water", explanation: "The practice of reducing unnecessary water use and protecting water resources from depletion or pollution.", example: "Water conservation becomes particularly important during prolonged droughts." },
  { word: "Water deficit", meaning: "A situation in which water demand exceeds available supply", explanation: "A shortage that occurs when the amount of water available is insufficient to meet the needs of people, agriculture, or ecosystems.", example: "The region is experiencing a severe water deficit." },
  { word: "(Neuro)linguist", meaning: "A specialist studying language and the brain", explanation: "A specialist in the study of language and its relationship to the brain and nervous system.", example: "A neurolinguist might study how different languages affect brain activity." },
  { word: "(Neuro)linguistics", meaning: "The study of language and the brain", explanation: "The study of the relationship between language and the structure and function of the brain.", example: "Neurolinguistics explores how brain damage affects language ability." },
  { word: "A breakthrough", meaning: "Major discovery or achievement", explanation: "A discovery or achievement that comes after a lot of hard work.", example: "The researchers announced a major breakthrough in the treatment of the disease." },
  { word: "A creation", meaning: "Something that has been made", explanation: "Something that has been made or invented.", example: "The device was regarded as an impressive creation of modern engineering." },
  { word: "A creator", meaning: "Person or entity that creates", explanation: "A person or entity that creates something.", example: "The creator of the software designed it to be accessible to inexperienced users." },
  { word: "A design patent", meaning: "Legal protection for a design", explanation: "A form of legal protection that gives someone ownership of the design of an item.", example: "The company applied for a design patent to protect its original product design." },
  { word: "A device", meaning: "Object designed for a purpose", explanation: "An object or piece of equipment designed to perform.", example: "The device was developed to improve energy efficiency." },
  { word: "A digital native", meaning: "Person raised with digital technology", explanation: "A digital native is someone who has grown up using digital technology such as computers and the internet.", example: "Digital natives often adapt quickly to new online platforms." },
  { word: "A discovery", meaning: "Something newly found", explanation: "The process of finding something new or the thing that is found.", example: "The discovery provided scientists with valuable evidence about the disease." },
  { word: "A major public health crisis", meaning: "A serious threat to population health", explanation: "A situation in which the general health of a population is seriously threatened on a large scale.", example: "Obesity is considered a major public health crisis in many developed countries." },
  { word: "A patent", meaning: "Legal right over an invention", explanation: "The official legal right granted to an inventor for exclusive use of their invention.", example: "The patent protected the inventor's technology from unauthorised commercial use." },
  { word: "A pioneer", meaning: "Early developer or explorer", explanation: "A person who is among the first to explore or develop something new.", example: "She was a pioneer in the development of modern space technology." },
  { word: "A survey/questionnaire", meaning: "A tool for collecting information", explanation: "A method or instrument, usually a set of written questions, used to collect information from a group of people.", example: "The researchers distributed a questionnaire to participants." },
  { word: "A technophile", meaning: "Technology enthusiast", explanation: "A technophile is a person who loves technology and is enthusiastic about gadgets and technological developments.", example: "As a technophile, he closely follows developments in artificial intelligence." },
  { word: "Acquisition/learning", meaning: "Natural versus formal language study", explanation: "Acquisition refers to the natural, unconscious process of gaining a language, while learning involves conscious, formal study.", example: "Acquisition happens naturally in childhood, while learning involves conscious study later in life." },
  { word: "Active and passive knowledge", meaning: "Knowledge used or understood", explanation: "Knowledge of language that can be actively used.", example: "Learners often have more passive than active knowledge." },
  { word: "Age factor", meaning: "The influence of age", explanation: "The influence that a person's age has on a process such as language learning.", example: "The age factor can significantly affect how easily a person learns a new language." },
  { word: "Ageing population", meaning: "A population with a growing share of older people", explanation: "A population in which the proportion of older people is steadily increasing relative to younger age groups.", example: "An ageing population creates new demands on healthcare and pension systems." },
  { word: "Agriculture", meaning: "Science and practice of farming", explanation: "The science and practice of farming, including crops and animals.", example: "Agriculture remains essential to food security in many countries." },
  { word: "Alternative energy", meaning: "Energy from non-traditional sources", explanation: "Energy produced in ways that do not use up natural resources or harm the environment, such as solar or wind power.", example: "Investment in alternative energy could reduce dependence on fossil fuels." },
  { word: "Alternative medicine", meaning: "Non-conventional treatment methods", explanation: "Treatments and practices used instead of conventional (mainstream) medicine, such as acupuncture or herbal remedies.", example: "Some people choose alternative medicine, while others prefer conventional treatment." },
  { word: "An experiment", meaning: "Scientific test or procedure", explanation: "A controlled procedure used to test a hypothesis.", example: "The experiment produced statistically significant results." },
  { word: "An innovation", meaning: "New idea or method", explanation: "A new idea, method, or piece of equipment.", example: "The innovation significantly improved production efficiency." },
  { word: "An innovator", meaning: "Person introducing new ideas", explanation: "A person who introduces new ideas, methods, or technologies.", example: "The scientist became recognised as an innovator in the field of biotechnology." },
  { word: "An invention", meaning: "Something newly created", explanation: "A new device, method, or process developed from study and experimentation.", example: "The invention transformed the way people communicated across long distances." },
  { word: "An inventor", meaning: "Person who creates inventions", explanation: "A person who invents new devices, methods, or processes.", example: "The inventor spent several years developing the new device." },
  { word: "Ancient cultures/civilizations", meaning: "Early human societies", explanation: "Cultures or civilizations that existed in ancient historical periods.", example: "Ancient cultures developed sophisticated systems of knowledge." },
  { word: "Appliance", meaning: "Household electrical device", explanation: "A machine or electrical device used for household tasks.", example: "Energy-efficient appliances can reduce household electricity consumption." },
  { word: "Art/artistic", meaning: "Creative expression", explanation: "Art is the expression of human creative ability, while artistic describes something related to art or artists.", example: "The museum provides opportunities for people to appreciate artistic achievement." },
  { word: "Artificial intelligence", meaning: "Computer-based human intelligence", explanation: "Artificial intelligence involves computer systems that simulate human intelligence, including learning, reasoning, and problem-solving.", example: "Artificial intelligence is increasingly being used to analyse large amounts of data." },
  { word: "Artificial intelligence (AI)", meaning: "Computer-based human-like intelligence", explanation: "The development of computer systems that can perform tasks typically requiring human intelligence, such as decision-making and language translation.", example: "Artificial intelligence is transforming the way information is processed and analysed." },
  { word: "Artificial light", meaning: "Light made by human technology", explanation: "Light produced by human-made sources, such as electric lamps, rather than by the sun.", example: "Artificial light extends the productive hours of the day beyond daylight." },
  { word: "Arts", meaning: "Creative cultural activities", explanation: "Creative activities such as music, painting, literature, and theatre that express human imagination.", example: "The arts contribute significantly to cultural development." },
  { word: "Assessment/evaluation/examination/test", meaning: "Methods that measure student performance", explanation: "Methods used to measure students' understanding or performance in a subject.", example: "Assessments, evaluations, and tests help determine student progress." },
  { word: "Assurances", meaning: "Promises or guarantees", explanation: "Assurances are promises or guarantees intended to make customers feel that a service or transaction is safe.", example: "Online retailers provide assurances that customers' personal information is secure." },
  { word: "Automation", meaning: "Technology performing tasks automatically", explanation: "Automation is the use of technology to perform tasks without direct human intervention.", example: "Automation is expected to transform employment patterns in many industries." },
  { word: "Avoidable diseases", meaning: "Illnesses that can be prevented", explanation: "Illnesses that can be prevented through healthy lifestyle choices such as diet and exercise.", example: "Obesity is one of the avoidable diseases that public health campaigns try to reduce." },
  { word: "Back up files", meaning: "Make copies of files", explanation: "To make additional copies of digital files for security.", example: "Users should back up files regularly to prevent data loss." },
  { word: "Be healthy", meaning: "To be in good physical condition", explanation: "To be in a state of good physical and mental condition, free from illness.", example: "He is in excellent shape and is generally considered to be very healthy." },
  { word: "Be wary of commercials", meaning: "Be cautious about advertisements", explanation: "To be wary of commercials means to remain cautious and critical when watching advertisements.", example: "Children should be taught to be wary of commercials that make unrealistic claims." },
  { word: "Being overweight", meaning: "Carrying excess body weight", explanation: "Carrying excess body weight relative to height, though not necessarily to the degree of obesity.", example: "Being overweight can increase the risk of several chronic health conditions." },
  { word: "Bilingual", meaning: "Able to speak two languages fluently", explanation: "Able to speak two languages fluently, often from an early age.", example: "A bilingual person can communicate effectively in two languages." },
  { word: "Bilingualism was considered a ‘handicap’", meaning: "Bilingualism was once viewed as a disadvantage", explanation: "Historically, bilingualism was often viewed as a disadvantage that could confuse children or slow their development.", example: "In the past, bilingualism was mistakenly believed to hinder a child's cognitive development." },
  { word: "Bio-tech industry", meaning: "Biotechnology industry", explanation: "An industry based on the use of biological processes, organisms, or systems to develop products and technologies.", example: "The bio-tech industry is investing heavily in innovative medical treatments." },
  { word: "Biological clock", meaning: "The body's internal timing system", explanation: "An internal mechanism that regulates physiological processes and cycles, such as sleep and hormone release, over roughly 24 hours.", example: "Disruptions to the biological clock can lead to sleep disorders and fatigue." },
  { word: "Bombard young children", meaning: "Overwhelm children with advertising", explanation: "To bombard young children means to expose them to a very large amount of advertising or marketing messages.", example: "Critics argue that children are bombarded with commercial messages from an early age." },
  { word: "Browse websites", meaning: "Look through websites", explanation: "To look through information on different websites.", example: "Students browse websites to locate relevant academic information." },
  { word: "Campus", meaning: "The grounds and buildings of a university", explanation: "The buildings and grounds that make up a university or college.", example: "The university campus provides extensive academic and recreational facilities." },
  { word: "Carry out/Investigate/Prove", meaning: "Conduct, examine, demonstrate", explanation: "Carry out means conduct; investigate means examine; prove means demonstrate truth.", example: "Researchers carry out studies to investigate and prove scientific claims." },
  { word: "Celebrity endorsement", meaning: "Celebrity promotion of a product", explanation: "A marketing strategy in which a well-known person promotes a product or service.", example: "Celebrity endorsement can significantly influence consumers' perceptions of a brand." },
  { word: "Chronic disease", meaning: "A long-lasting illness", explanation: "A disease that persists for a long time, often for life, and usually develops slowly.", example: "Chronic disease places considerable pressure on healthcare systems worldwide." },
  { word: "Climate change", meaning: "Long-term climate alteration", explanation: "Long-term changes in temperature and weather patterns.", example: "Climate change is affecting agriculture and water availability." },
  { word: "Code-switching", meaning: "Switching between languages", explanation: "Switching from one language to another within a single conversation or sentence.", example: "Code-switching often occurs in bilingual conversations where speakers share more than one language." },
  { word: "Cognitive processing", meaning: "Mental processes involved in understanding", explanation: "The mental processes involved in understanding, learning, remembering, and using information.", example: "Cognitive processing includes activities like perception, memory, and reasoning." },
  { word: "Colourful/entertaining/creative/imaginative", meaning: "Attractive and engaging advertising qualities", explanation: "These adjectives describe advertisements that attract attention through visual appeal, entertainment, creativity, or imagination.", example: "Colourful and imaginative advertisements can attract the attention of younger audiences." },
  { word: "Communicative competence", meaning: "The ability to communicate effectively", explanation: "The ability to communicate appropriately and effectively in a given social or linguistic context.", example: "Communicative competence is essential for successful interaction." },
  { word: "Computer age", meaning: "Era dominated by computers", explanation: "The modern period characterized by widespread use of computers.", example: "The computer age has transformed communication and employment." },
  { word: "Computer literate", meaning: "Able to use computers effectively", explanation: "Computer literate means having enough knowledge and skill to use computers effectively.", example: "Most modern employers expect graduates to be computer literate." },
  { word: "Consumer society", meaning: "Society focused on consumption", explanation: "A society in which buying and consuming goods and services is a dominant part of everyday life.", example: "Advertising plays an important role in shaping behaviour in a consumer society." },
  { word: "Consumer/Customer", meaning: "Person using or buying goods", explanation: "A consumer uses goods or services, whereas a customer is a person who purchases them.", example: "Understanding consumer behaviour helps businesses respond to customer needs." },
  { word: "Consumerism", meaning: "Strong focus on acquiring goods", explanation: "Consumerism is a strong concern with acquiring and consuming goods and services.", example: "Growing consumerism has raised concerns about waste and environmental sustainability." },
  { word: "Context", meaning: "Situation surrounding communication", explanation: "The circumstances or situation in which communication occurs.", example: "Context strongly influences how language is interpreted." },
  { word: "Conversational strategies", meaning: "Methods used during conversation", explanation: "Techniques speakers use to manage and maintain conversations.", example: "Conversational strategies help speakers maintain effective communication." },
  { word: "Crash", meaning: "Stop working suddenly", explanation: "When a computer or program suddenly stops functioning.", example: "The application may crash when processing large datasets." },
  { word: "Creation myths", meaning: "Stories explaining origins", explanation: "Traditional stories explaining how the world or humanity began.", example: "Creation myths reveal important cultural beliefs about origins." },
  { word: "Creation/creative", meaning: "Making something new", explanation: "Creation is the act of bringing something into existence, while creative describes the ability to produce new ideas or concepts.", example: "The creation of original artwork requires both technical ability and creative thinking." },
  { word: "Creative", meaning: "Using imagination to produce ideas", explanation: "Relating to or involving the use of imagination to produce new ideas.", example: "Creative thinking is increasingly important in modern research and development." },
  { word: "Culture/cultural", meaning: "Society's customs and ideas", explanation: "Culture refers to the customs, beliefs, arts, and achievements of a society, while cultural describes things related to those characteristics.", example: "Cultural differences can strongly influence how people communicate and behave." },
  { word: "Customer satisfaction", meaning: "Degree of customer happiness", explanation: "Customer satisfaction refers to the degree to which customers are pleased with a company's products or services.", example: "High levels of customer satisfaction can contribute to long-term business success." },
  { word: "Customers often feel pressurised into buying something", meaning: "Customers feel forced to purchase", explanation: "Customers may experience pressure that encourages them to purchase products.", example: "Some customers feel pressurised into buying unnecessary products." },
  { word: "Cutting-edge", meaning: "Extremely technologically advanced", explanation: "Cutting-edge describes technology or methods that are at the forefront of development.", example: "The university has invested in cutting-edge research facilities." },
  { word: "Cyber-crime", meaning: "Crime using computers or the internet", explanation: "Cyber-crime refers to criminal activities carried out through computers, networks, or the internet.", example: "Governments are investing in stronger measures to combat cyber-crime." },
  { word: "Department/faculty", meaning: "Academic organisational units", explanation: "Organisational divisions within an educational institution that specialise in particular subject areas.", example: "Students usually belong to a particular department within the wider faculty." },
  { word: "Desktop PC", meaning: "Personal computer for a desk", explanation: "A personal computer designed to remain in a fixed location.", example: "The laboratory uses desktop PCs for data analysis." },
  { word: "Diabetes", meaning: "A disease involving blood sugar", explanation: "A chronic condition affecting the body's ability to regulate blood sugar levels.", example: "Diabetes can often be managed through lifestyle changes and medication." },
  { word: "Digital divide", meaning: "The gap in access to technology", explanation: "The gap between people who have access to modern digital technology and those who do not.", example: "The digital divide can deepen existing social inequalities." },
  { word: "Digital native", meaning: "Person raised with digital technology", explanation: "A person who has grown up using digital technologies.", example: "Digital natives often adapt quickly to new technologies." },
  { word: "Discovery", meaning: "Something newly found", explanation: "The act of finding something previously unknown.", example: "The discovery provided new evidence about human evolution." },
  { word: "Diurnal/Nocturnal", meaning: "Active by day or by night", explanation: "Describing organisms that are active during the day (diurnal) or during the night (nocturnal).", example: "Some species are diurnal, whereas others are nocturnal." },
  { word: "Download", meaning: "Transfer data to a device", explanation: "To transfer digital information from the internet to a device.", example: "Students can download academic articles from the database." },
  { word: "Drainage channels", meaning: "Structures carrying excess water", explanation: "Structures designed to carry excess water away from roads and buildings.", example: "Drainage channels can reduce the risk of urban flooding." },
  { word: "Drama/dramatic", meaning: "Literature performed by actors", explanation: "Drama is a form of literature intended for performance, while dramatic describes something related to drama or involving exaggerated emotions or actions.", example: "The play contained a dramatic plot that kept the audience engaged." },
  { word: "Education", meaning: "The process of learning", explanation: "The process of acquiring knowledge, skills, and values, typically through schools or other institutions.", example: "Education plays a central role in social and economic development." },
  { word: "Effective", meaning: "Producing the desired result", explanation: "Effective describes something that successfully produces the intended result.", example: "An effective advertising campaign can significantly increase brand awareness." },
  { word: "Elderly people", meaning: "Older members of society", explanation: "People who are considered to be old, typically of an advanced age such as over 65.", example: "Elderly people can benefit from accessible public transport and healthcare." },
  { word: "Enhance customer loyalty", meaning: "Increase customer commitment", explanation: "To enhance customer loyalty means to increase the likelihood that customers will continue buying from a company.", example: "Businesses often improve customer service to enhance customer loyalty." },
  { word: "Environmental change", meaning: "Changes in the environment", explanation: "Alterations in the environment caused by natural or human activities, such as climate change.", example: "Environmental change can have long-term consequences for biodiversity." },
  { word: "Equipment", meaning: "Tools and machinery", explanation: "The tools, machines, or other items needed for a particular purpose or activity.", example: "Modern laboratories require sophisticated scientific equipment." },
  { word: "Evaluate/Assess/Examine/Analyse", meaning: "Judge, estimate, inspect, study", explanation: "These verbs describe different forms of detailed research assessment.", example: "Researchers evaluate, assess, examine, and analyse the available evidence." },
  { word: "Evaluation", meaning: "Process of judging value", explanation: "The process of assessing or judging the value or performance.", example: "The evaluation revealed several weaknesses in the proposed method." },
  { word: "Exaggerate the features of toys", meaning: "Overstate toy qualities", explanation: "To exaggerate the features of toys means to present their qualities as greater or more impressive than they really are.", example: "Some advertisements exaggerate the features of toys to make them appear more attractive." },
  { word: "Experiment", meaning: "Scientific test", explanation: "A scientific procedure used to test a hypothesis or demonstrate a fact.", example: "The experiment produced results that supported the hypothesis." },
  { word: "Face-to-face interviews", meaning: "Direct interviews with participants", explanation: "Interviews conducted directly between researchers and participants.", example: "Face-to-face interviews can provide detailed qualitative data." },
  { word: "Famous brands", meaning: "Widely recognised brands", explanation: "Brands or companies that are well known and widely recognised by consumers.", example: "Famous brands often spend large amounts of money on international advertising." },
  { word: "Fast-food outlet", meaning: "A restaurant selling quickly prepared food", explanation: "A restaurant or shop that sells food that is prepared and served very quickly, often low in nutritional value.", example: "The number of fast-food outlets near schools has raised health concerns." },
  { word: "Fewer fast-food outlets near schools", meaning: "Reducing fast-food restaurants near schools", explanation: "The idea of reducing the number of fast-food restaurants located close to schools to limit children's access to unhealthy food.", example: "Health experts recommend fewer fast-food outlets near schools to help tackle childhood obesity." },
  { word: "Fiction/fictional", meaning: "Imaginary literature or events", explanation: "Fiction describes literature involving imaginary events and people, while fictional describes something that exists only in an imagined story.", example: "Fictional stories can encourage readers to explore unfamiliar perspectives." },
  { word: "Field trip", meaning: "Educational visit outside class", explanation: "An educational visit outside the classroom to observe real-world conditions.", example: "The students went on a field trip to the power plant." },
  { word: "Fizzy drinks", meaning: "Carbonated beverages", explanation: "Drinks containing dissolved carbon dioxide, often with added sugar, that produce bubbles.", example: "Excessive consumption of fizzy drinks has been linked to weight gain." },
  { word: "Flawed research", meaning: "Research that contains errors", explanation: "Research that contains errors, biases, or inaccuracies that undermine its conclusions.", example: "Flawed research can lead to incorrect conclusions and misguided policy." },
  { word: "Formative Assessment", meaning: "Assessment during learning", explanation: "Assessment carried out during learning to monitor progress.", example: "Formative assessment helps teachers identify learning difficulties early." },
  { word: "Frankenstein's monster", meaning: "Uncontrolled harmful invention", explanation: "An invention that cannot be controlled by the person who created it, especially when it causes unintended harm.", example: "The technology was described as a Frankenstein's monster because its consequences could no longer be controlled." },
  { word: "Frankenstein’s monster", meaning: "Uncontrolled harmful invention", explanation: "An invention that cannot be controlled by its creator and causes unintended harm.", example: "The technology became a Frankenstein’s monster beyond its creators' control." },
  { word: "Freebies/Promotional materials/Gifts", meaning: "Free promotional items", explanation: "Items given away at no cost to promote a product, service, or brand.", example: "The company distributed promotional materials and freebies at the trade exhibition." },
  { word: "Function", meaning: "The purpose of language", explanation: "The purpose or role that language performs in a particular context, such as requesting or apologising.", example: "The function of language changes according to context." },
  { word: "Future-proof", meaning: "Designed for future developments", explanation: "To design something in a way that makes it unlikely to need replacing in the future by something newer and more effective.", example: "The university invested in future-proof infrastructure to accommodate technological change." },
  { word: "Gadget", meaning: "Small useful device", explanation: "A small device or machine designed for a particular purpose.", example: "The gadget provides users with a convenient technological solution." },
  { word: "Genetic engineering", meaning: "Modification of genetic material", explanation: "The deliberate modification of the characteristics of an organism by manipulating its genetic material.", example: "Genetic engineering has created new possibilities in agriculture and medicine." },
  { word: "Global warming", meaning: "Increase in Earth's temperature", explanation: "The gradual increase in Earth's temperature due to greenhouse gas emissions.", example: "Global warming is affecting ecosystems across the world." },
  { word: "GM crops", meaning: "Genetically modified crops", explanation: "Crops whose DNA has been changed using genetic engineering methods.", example: "GM crops are widely debated because of their potential agricultural and environmental effects." },
  { word: "Go online", meaning: "Connect to the internet", explanation: "To connect to and use the internet.", example: "Consumers increasingly go online to access essential services." },
  { word: "Greed", meaning: "Excessive desire for more", explanation: "Greed is an excessive desire for wealth, possessions, power, or other things beyond what is necessary.", example: "Excessive greed can contribute to unethical behaviour in the business world." },
  { word: "Greenhouse gases", meaning: "Heat-trapping atmospheric gases", explanation: "Gases that trap heat in the Earth's atmosphere.", example: "Reducing greenhouse gases is central to climate policy." },
  { word: "Hard-sell approach", meaning: "High-pressure sales strategy", explanation: "A sales strategy that uses strong and persistent pressure to persuade customers to purchase something.", example: "A hard-sell approach may discourage consumers who prefer to make independent decisions." },
  { word: "Health experts", meaning: "Professionals specialising in health", explanation: "Professionals with specialised knowledge of health and medicine who advise the public or governments.", example: "Health experts frequently recommend preventive measures rather than treatment." },
  { word: "Health food", meaning: "Food that is good for the body", explanation: "Food believed to be particularly beneficial to health, such as fruits, vegetables and whole grains.", example: "Health food like fruits and vegetables is an essential part of a balanced diet." },
  { word: "Health insurance", meaning: "A plan that covers medical costs", explanation: "A financial plan that covers some or all of a person's medical expenses in exchange for regular payments.", example: "Health insurance helps cover the costs of hospital treatment and medication." },
  { word: "Health problems", meaning: "Conditions affecting physical or mental health", explanation: "Physical or mental conditions that negatively affect a person's wellbeing.", example: "Health problems can reduce educational and economic opportunities." },
  { word: "Healthcare", meaning: "Services that maintain or improve health", explanation: "The organised provision of medical care to individuals or communities, including prevention and treatment.", example: "Access to quality healthcare is vital for a country's overall wellbeing." },
  { word: "Healthy diet", meaning: "A nutritious way of eating", explanation: "A balanced eating pattern providing essential nutrients while avoiding excess fat, sugar and salt.", example: "A healthy diet can reduce the risk of many chronic diseases." },
  { word: "Healthy economy", meaning: "A strong, well-functioning economy", explanation: "A financial situation in which a country or system is growing steadily and functioning efficiently.", example: "A healthy economy is crucial for improving living standards and reducing unemployment." },
  { word: "Heart disease", meaning: "A disease affecting the heart", explanation: "A group of conditions affecting the structure and function of the heart, including coronary artery disease.", example: "Heart disease remains a major global health concern." },
  { word: "Humorous", meaning: "Funny and entertaining", explanation: "Humorous describes something that is amusing or intended to make people laugh.", example: "Humorous advertisements are often remembered more easily by consumers." },
  { word: "Hypothesis/Theory", meaning: "Proposed or established explanation", explanation: "A hypothesis is proposed, while a theory is well-substantiated.", example: "The researchers developed a hypothesis before conducting the experiment." },
  { word: "Illiterate", meaning: "Unable to read or write", explanation: "Unable to read or write effectively.", example: "Illiteracy can restrict access to education and employment." },
  { word: "Imagination/imaginative", meaning: "Ability to form new ideas", explanation: "Imagination is the ability to form ideas or images that are not directly present, while imaginative describes someone who uses this ability creatively.", example: "An imaginative writer can create fictional worlds that engage readers deeply." },
  { word: "Imitate", meaning: "To copy someone's behaviour or speech", explanation: "To copy the behaviour, speech, or actions of someone else, often as a way of learning.", example: "Young children often imitate adults when developing language." },
  { word: "In case of/to protect against flooding", meaning: "Measures preventing flooding", explanation: "Measures or actions taken to prevent or manage flooding.", example: "Drainage systems are constructed to protect against flooding." },
  { word: "In the future", meaning: "At a later time", explanation: "At a time later than the present.", example: "In the future, technology may change how people work." },
  { word: "In the long term", meaning: "Over an extended period", explanation: "Over an extended period of time.", example: "In the long term, environmental policies may reduce pollution." },
  { word: "In the medium term", meaning: "During an intermediate period", explanation: "During a period between the short and long term.", example: "In the medium term, investment could improve productivity." },
  { word: "In the short term", meaning: "During a brief period", explanation: "During a relatively short period of time.", example: "In the short term, the policy may increase costs." },
  { word: "Innovation", meaning: "Introduction of new ideas", explanation: "The process of making changes by introducing new ideas or methods.", example: "Innovation is essential for maintaining economic growth in a rapidly changing world." },
  { word: "Innovative", meaning: "Advanced and original", explanation: "Featuring new methods, ideas, or approaches that are advanced and original.", example: "The company developed an innovative approach to renewable energy." },
  { word: "Inspiration/inspirational", meaning: "Motivation for creative action", explanation: "Inspiration is the process of being mentally stimulated to create or think differently, while inspirational describes something that motivates people.", example: "The artist's experiences provided considerable inspiration for her later work." },
  { word: "Internet security", meaning: "Protection of online systems", explanation: "Measures designed to protect internet users and systems from threats.", example: "Internet security is essential when sensitive information is transmitted." },
  { word: "Interview", meaning: "Question-based conversation", explanation: "A conversation in which questions are asked to obtain information.", example: "The researchers conducted interviews with local residents." },
  { word: "Invention", meaning: "Something newly created", explanation: "A new device, method, or process created through development.", example: "The invention transformed communication across distant regions." },
  { word: "Inventions", meaning: "Newly created devices or methods", explanation: "New devices, methods, or processes created through innovation.", example: "Major inventions have transformed human societies." },
  { word: "Inventive", meaning: "Creative in developing new ideas", explanation: "Showing creativity or imagination in designing or making something new.", example: "The engineer developed an inventive solution to the technical problem." },
  { word: "Irreparable damage", meaning: "Damage that cannot be repaired", explanation: "Harm that cannot be repaired or corrected.", example: "Uncontrolled industrial development can cause irreparable damage to fragile ecosystems." },
  { word: "Irreversible effects", meaning: "Effects that cannot be reversed", explanation: "Consequences that cannot be undone or reversed.", example: "Some forms of environmental degradation may have irreversible effects." },
  { word: "Irritating/annoying", meaning: "Causing irritation", explanation: "These adjectives describe advertisements or other things that make people feel annoyed or irritated.", example: "Some viewers consider repetitive advertisements particularly irritating." },
  { word: "Labour-saving", meaning: "Reducing work and effort", explanation: "Labour-saving describes something designed to reduce the amount of work or effort required.", example: "Labour-saving technologies have reduced the amount of time required for household tasks." },
  { word: "Language ability", meaning: "Skill in using language", explanation: "The level of skill a person has.", example: "Language ability can influence academic achievement significantly." },
  { word: "Language acquisition/to acquire language", meaning: "Natural process of learning language", explanation: "The natural process of learning and developing language.", example: "Children acquire language naturally through social interaction." },
  { word: "Language proficiency", meaning: "A person's level of language skill", explanation: "The level of skill or competence a person has in using a language.", example: "Language proficiency is often assessed through standardised tests." },
  { word: "Learning strategies", meaning: "Methods for learning effectively", explanation: "Techniques used by learners to improve their learning.", example: "Effective learning strategies can improve academic performance." },
  { word: "Lecturers/professors/personal tutors", meaning: "Different academic educators", explanation: "Different types of educators who work in universities, ranging from lecturers to senior professors and personal tutors.", example: "Lecturers, professors, and personal tutors play crucial roles in student learning." },
  { word: "Lectures/seminars/tutorials", meaning: "Types of educational sessions", explanation: "Different types of educational sessions for students, ranging from large formal talks to small discussion groups.", example: "Students attend lectures, seminars, and tutorials as part of their degree course." },
  { word: "Life expectancy", meaning: "Expected length of life", explanation: "The average number of years a person is expected to live, based on statistical data.", example: "Life expectancy has increased significantly in many countries over the past century." },
  { word: "Life expectancy/Longevity/Lifespan", meaning: "How long someone is expected to live", explanation: "Terms describing the average length of time a person is expected to live, or the duration of a person's life.", example: "Advances in healthcare have increased life expectancy in many countries." },
  { word: "Life quality", meaning: "Overall level of wellbeing", explanation: "The general level of health, comfort, and satisfaction experienced in everyday life.", example: "Healthcare investment can substantially improve quality of life for elderly citizens." },
  { word: "Lifespan", meaning: "Period an organism lives", explanation: "The entire period during which an organism.", example: "The lifespan of humans varies across populations." },
  { word: "Linguistics", meaning: "Scientific study of language", explanation: "The scientific study of language and its structure.", example: "Linguistics examines how languages are structured and used." },
  { word: "Literacy", meaning: "Ability to read and write", explanation: "The ability to read and write effectively.", example: "Literacy is fundamental to participation in modern society." },
  { word: "Literature search", meaning: "Search of academic sources", explanation: "The process of finding scholarly articles, books, and other sources.", example: "A literature search is essential before beginning a research project." },
  { word: "Longevity", meaning: "A long duration of life", explanation: "The length or duration of an individual's life, especially when it is long.", example: "Longevity is influenced by genetics, lifestyle, and access to healthcare." },
  { word: "Manufacturer/Distributor/Vendor", meaning: "Businesses making or selling products", explanation: "A manufacturer makes products, a distributor supplies them to retailers, and a vendor sells products, often directly to consumers.", example: "Manufacturers, distributors, and vendors all contribute to the supply chain." },
  { word: "Marine life", meaning: "Plants and animals that live in the sea", explanation: "The plants and animals that live in the sea and other saltwater environments.", example: "Marine life is threatened by increasing ocean pollution." },
  { word: "Marketing campaigns aimed at children", meaning: "Advertising directed at children", explanation: "Marketing campaigns specifically designed to attract and influence younger audiences.", example: "Marketing campaigns aimed at children often use familiar cartoon characters." },
  { word: "Marketing ploy/campaign/tactic/gimmick", meaning: "Method used to promote products", explanation: "These terms describe strategies or methods used to promote products, attract customers, and increase sales.", example: "The company used an unusual marketing gimmick to attract public attention." },
  { word: "Memorable", meaning: "Easy to remember", explanation: "Memorable describes something that is easy to remember because it is distinctive or interesting.", example: "A memorable slogan can help consumers recognise a brand immediately." },
  { word: "Meteorology", meaning: "Scientific study of weather", explanation: "The scientific study of the atmosphere and weather.", example: "Meteorology helps scientists predict severe weather events." },
  { word: "Minority languages", meaning: "Languages spoken by smaller groups", explanation: "Languages spoken by relatively small communities within a population.", example: "Minority languages may require specific protection and support." },
  { word: "Misleading", meaning: "Giving false or confusing information", explanation: "Misleading describes something that gives people information that is false, incomplete, or likely to create a wrong impression.", example: "Misleading advertising can prevent consumers from making informed decisions." },
  { word: "Module/course", meaning: "Units of study", explanation: "Units of study within an educational programme.", example: "Each course is divided into several modules." },
  { word: "Mother tongue", meaning: "First language", explanation: "The first language learned naturally during childhood.", example: "A person's mother tongue often shapes their linguistic identity." },
  { word: "Mother tongue/native language", meaning: "The first language a person learns", explanation: "The first language a person learns from birth, usually spoken at home during childhood.", example: "Her mother tongue is Spanish, but she now works mainly in English." },
  { word: "Music/musical", meaning: "Art of organised sound", explanation: "Music is the art of arranging sounds to create a composition, while musical describes something related to music.", example: "Music can have a significant influence on people's emotions and behaviour." },
  { word: "Navigate a website", meaning: "Move through website pages", explanation: "To move through different pages or sections of a website.", example: "Users should be able to navigate a website easily." },
  { word: "Nike logo is called the ‘Swoosh’", meaning: "Nike's recognizable logo", explanation: "The Swoosh is the well-known visual logo associated with Nike.", example: "The Nike Swoosh is widely recognised around the world." },
  { word: "Nike slogan is my favourite – Just Do It", meaning: "Nike's famous advertising slogan", explanation: "Just Do It is Nike's widely recognised advertising slogan.", example: "The slogan Just Do It has become internationally recognisable." },
  { word: "Nuclear power/technology", meaning: "Energy or technology using nuclear reactions", explanation: "The controlled use of nuclear fission to generate electricity or develop other technologies.", example: "The report discussed nuclear power/technology in detail." },
  { word: "Nuclear technology", meaning: "Technology involving nuclear reactions", explanation: "Technology that involves the reactions of atomic nuclei, including the production of energy from nuclear reactors.", example: "Nuclear technology has applications in both energy production and medical research." },
  { word: "Obese", meaning: "Grossly overweight", explanation: "Grossly fat or overweight, to an extent that poses a serious risk to health.", example: "He became obese after years of poor diet and lack of exercise." },
  { word: "Obesity prevention", meaning: "Actions taken to prevent obesity", explanation: "Strategies designed to reduce the development and spread of obesity within a population.", example: "Obesity prevention requires cooperation between schools, families, and governments." },
  { word: "Online retailers", meaning: "Internet-based sellers", explanation: "Businesses that sell products or services through the internet.", example: "Online retailers have changed traditional shopping habits significantly." },
  { word: "Operating system", meaning: "Core computer software", explanation: "The main software that controls a computer's hardware and programs.", example: "The operating system manages the computer's basic functions." },
  { word: "Originality/original", meaning: "Quality of being new", explanation: "Originality is the quality of being novel or unique, while original describes something that is new and not copied from another source.", example: "The originality of the artist's work was praised by critics." },
  { word: "Outdated", meaning: "No longer current", explanation: "Outdated describes something that is no longer current, modern, or fashionable.", example: "Outdated computer systems can reduce productivity and create security risks." },
  { word: "Overweight/obese people", meaning: "People who weigh more than is healthy", explanation: "People whose body weight is significantly higher than what is considered healthy for their height.", example: "Overweight and obese people are at a higher risk of developing heart disease and diabetes." },
  { word: "Pensioners/Over-60s", meaning: "People who have retired", explanation: "People who have reached retirement age or are generally aged over sixty.", example: "Pensioners may require greater access to community healthcare services." },
  { word: "Persuade – persuasive – persuasion", meaning: "Influence someone's decision", explanation: "To persuade means influence someone; persuasive describes convincing communication.", example: "Advertising often uses persuasive language to influence consumers." },
  { word: "Physical activity", meaning: "Body movement requiring energy", explanation: "Any bodily movement that requires energy expenditure.", example: "Regular physical activity contributes to long-term health." },
  { word: "Pilot project", meaning: "Small-scale trial project", explanation: "A small-scale experiment or project used to test feasibility.", example: "The government launched a pilot project before nationwide implementation." },
  { word: "Pioneering", meaning: "Introducing new methods", explanation: "Using new methods to accomplish something innovative.", example: "The researchers conducted pioneering work in renewable energy." },
  { word: "Pioneering (adjective)", meaning: "Using new methods", explanation: "Using new methods or approaches to accomplish something.", example: "The university conducted pioneering research in biotechnology." },
  { word: "Placebo effect", meaning: "Improvement caused by expectation", explanation: "Improvement experienced after receiving treatment without therapeutic value.", example: "The placebo effect can influence the results of clinical studies." },
  { word: "Playing sport", meaning: "Taking part in physical activities", explanation: "Participating in organised physical activities or games, usually for fitness or enjoyment.", example: "Playing sport can improve physical and mental health." },
  { word: "Playing sport(s)", meaning: "Taking part in organised physical activities", explanation: "Participating in organised physical activities or games, often competitively.", example: "Playing sports helps improve physical fitness and mental wellbeing." },
  { word: "Poetry/poetic", meaning: "Literary art using language", explanation: "Poetry is a form of literary art that uses language for aesthetic qualities, while poetic describes language or writing characteristic of poetry.", example: "The poem is notable for its poetic description of nature." },
  { word: "Pollutants are discharged into the rivers", meaning: "Harmful substances enter rivers", explanation: "Harmful substances are released into rivers, contaminating the water.", example: "Industrial pollutants are discharged into rivers despite environmental regulations." },
  { word: "Potential dangers", meaning: "Possible risks", explanation: "Possible risks or threats that could arise from a situation, development, or technology.", example: "Scientists must carefully evaluate the potential dangers of emerging technologies." },
  { word: "Productive skills", meaning: "Speaking and writing skills", explanation: "Language skills involving the production of language.", example: "Productive skills include speaking and writing abilities." },
  { word: "Productive/receptive skills", meaning: "Speaking-and-writing or reading-and-listening skills", explanation: "Language skills involving the production of language (speaking, writing) or its understanding (reading, listening).", example: "Productive and receptive skills develop at different rates in language learners." },
  { word: "Project/essay/dissertation/thesis/presentation", meaning: "Types of academic work", explanation: "Various types of academic work completed by students, from short essays to long dissertations and presentations.", example: "Completing a project, essay, dissertation, or thesis is often required for graduation." },
  { word: "Promotional events", meaning: "Events designed to promote products", explanation: "Special activities organised to promote a product, service, or brand.", example: "Promotional events can help companies build stronger relationships with potential customers." },
  { word: "Proverbs", meaning: "Traditional short sayings", explanation: "Short traditional sayings expressing common wisdom or advice.", example: "Proverbs often reflect the values of a society." },
  { word: "Public health", meaning: "The health of the population", explanation: "The health and wellbeing of communities and populations as a whole, rather than individuals.", example: "Public health policies can reduce preventable disease." },
  { word: "Questionnaire", meaning: "Set of research questions", explanation: "A set of questions used to collect data from respondents.", example: "The questionnaire collected information about participants' attitudes." },
  { word: "Radical measures are needed", meaning: "Extreme action is required", explanation: "Extreme or bold actions are required to bring about significant change.", example: "Radical measures may be needed to address the rising rate of childhood obesity." },
  { word: "Receptive skills", meaning: "Reading and listening skills", explanation: "Language skills involving understanding spoken or written language.", example: "Receptive skills include reading and listening comprehension." },
  { word: "Recommendations could go further", meaning: "Suggestions may not be enough", explanation: "The current suggestions or proposals may not be sufficiently strong or ambitious to solve the problem.", example: "Some health experts believe the recommendations on sugar consumption could go further." },
  { word: "Research proposal", meaning: "Detailed research plan", explanation: "A detailed plan outlining research objectives, methodology, and expected outcomes.", example: "The researcher submitted a research proposal to the university." },
  { word: "Respondent", meaning: "Person answering questions", explanation: "A person who answers questions, especially in a survey or research.", example: "Each respondent completed the questionnaire anonymously." },
  { word: "Restrictions on TV advertising", meaning: "Limits on television advertising", explanation: "The act of limiting the promotion of certain products, such as junk food, on television.", example: "There are restrictions on TV advertising for unhealthy food aimed at children." },
  { word: "Retirement age", meaning: "Age when people stop working", explanation: "The age at which people normally leave.", example: "The retirement age differs considerably between countries." },
  { word: "Risk of diabetes/heart disease", meaning: "Likelihood of developing serious illness", explanation: "The likelihood of developing serious health conditions such as diabetes or heart disease.", example: "Being overweight increases the risk of diabetes and heart disease." },
  { word: "Sales/Discounts/Offers/Bargains", meaning: "Reduced-price purchasing opportunities", explanation: "Sales, discounts, offers, and bargains refer to opportunities to purchase products at reduced or advantageous prices.", example: "Consumers are often attracted by sales, discounts, and special offers." },
  { word: "Scientific advances", meaning: "Progress in science", explanation: "Progress or developments in scientific knowledge or technology.", example: "Scientific advances have significantly improved the diagnosis of serious diseases." },
  { word: "Sedentary lifestyle", meaning: "A lifestyle with little physical activity", explanation: "A lifestyle characterised by prolonged sitting and very little physical exercise.", example: "A sedentary lifestyle is increasingly common among office workers." },
  { word: "Self-access centre", meaning: "A facility for independent learning", explanation: "A facility where students can study independently using books, computers, and other learning materials.", example: "The self-access centre provides useful resources for independent study." },
  { word: "Send an attachment", meaning: "Send a file with email", explanation: "To send a digital file together with an email message.", example: "Applicants can send an attachment containing their academic documents." },
  { word: "Serendipity", meaning: "Accidental valuable discovery", explanation: "The occurrence of finding something valuable or pleasant without actually seeking it.", example: "The discovery was largely a result of serendipity rather than deliberate planning." },
  { word: "Serendipity – an accidental discovery", meaning: "Valuable accidental discovery", explanation: "Finding something valuable or pleasant without deliberately seeking it.", example: "The discovery occurred through serendipity rather than planned experimentation." },
  { word: "Slick", meaning: "Skillful and professionally produced", explanation: "Slick describes something that is skilfully produced, polished, and effective in appearance.", example: "The company launched a slick advertising campaign aimed at younger consumers." },
  { word: "Smoking", meaning: "Inhaling smoke from burning tobacco", explanation: "The habit of inhaling and exhaling the smoke of burning tobacco, usually in cigarettes.", example: "Smoking is a leading cause of respiratory disease and lung cancer." },
  { word: "Social media", meaning: "Online communication platforms", explanation: "Websites and applications used for online communication and content sharing.", example: "Social media has transformed the way information is distributed." },
  { word: "Space exploration", meaning: "Investigation of outer space", explanation: "The investigation and discovery of outer space through the use of space technology.", example: "Space exploration has expanded our understanding of the universe." },
  { word: "Space ship", meaning: "Vehicle for space travel", explanation: "A vehicle designed for travel or operation in outer space.", example: "The space ship carried scientific equipment into orbit." },
  { word: "Space shuttle", meaning: "Reusable spacecraft", explanation: "A reusable spacecraft designed to transport astronauts and cargo to and from space.", example: "The space shuttle was designed to transport both astronauts and scientific equipment." },
  { word: "Space station", meaning: "Large spacecraft in orbit", explanation: "A large spacecraft in orbit around the Earth where astronauts can live and work for extended periods.", example: "The space station provides scientists with a unique environment for conducting experiments." },
  { word: "Space tourism", meaning: "Commercial travel into space", explanation: "Commercial space travel undertaken by private individuals for recreational purposes.", example: "Space tourism could become more accessible if the cost of space travel decreases." },
  { word: "Space travel", meaning: "Travel into outer space", explanation: "The act of travelling into outer space using spacecraft.", example: "Space travel requires advanced technology and extensive preparation." },
  { word: "State-of-the-art", meaning: "Using the latest technology", explanation: "State-of-the-art describes something incorporating the latest technological developments.", example: "The hospital has invested in state-of-the-art medical equipment." },
  { word: "Sugary drinks", meaning: "Beverages containing a lot of sugar", explanation: "Drinks containing significant amounts of added sugar, such as soft drinks and some juices.", example: "Sugary drinks are frequently associated with excessive calorie intake." },
  { word: "Surf the web", meaning: "Browse the internet", explanation: "To spend time browsing information and websites on the internet.", example: "Many people surf the web to obtain information quickly." },
  { word: "Survey", meaning: "Research method collecting data", explanation: "A research method used to gather data from a group of people.", example: "The survey examined public attitudes towards renewable energy." },
  { word: "Take part/Participate in a study", meaning: "Become involved in research", explanation: "To be involved in a research or experimental project.", example: "Participants were invited to take part in a study." },
  { word: "Target young children", meaning: "Direct marketing at children", explanation: "To target young children means to design advertising or marketing specifically for a young audience.", example: "Some companies target young children through colourful advertisements and popular characters." },
  { word: "Techie", meaning: "Technology enthusiast", explanation: "A person who is very interested in technology.", example: "The techie developed a practical solution to the problem." },
  { word: "Technophile", meaning: "Person enthusiastic about technology", explanation: "A person who is highly interested in and enthusiastic.", example: "As a technophile, he regularly experiments with emerging devices." },
  { word: "Technophobe", meaning: "Person afraid of technology", explanation: "A person who dislikes or fears modern technology.", example: "Some technophobes find rapid technological change difficult to manage." },
  { word: "The computer age", meaning: "Era of widespread computer use", explanation: "The computer age refers to the period characterised by widespread use of computers and digital technology.", example: "The computer age has fundamentally changed the way information is produced and shared." },
  { word: "Theory/hypothesis", meaning: "Scientific and academic concepts", explanation: "Concepts used in scientific and academic research.", example: "Scientists test hypotheses and develop theories through investigation." },
  { word: "Tidal patterns", meaning: "Regular movements of the sea level", explanation: "Regular changes in sea level caused by the gravitational pull of the moon and sun.", example: "Scientists monitor tidal patterns along vulnerable coastlines." },
  { word: "To advertise – an advertisement – advertising", meaning: "Promote a product or service", explanation: "To advertise means promote something; an advertisement is promotional material.", example: "Companies advertise products through increasingly sophisticated digital platforms." },
  { word: "To carry out/conduct a study", meaning: "To perform a research study", explanation: "To perform or organise a systematic research study in order to answer a specific question.", example: "Scientists carried out a study involving several hundred participants." },
  { word: "To coin a phrase", meaning: "Create a new expression", explanation: "To use a word or phrase that no one has used before.", example: "The researcher coined a phrase to describe the emerging technological trend." },
  { word: "To collect art", meaning: "Acquire artworks", explanation: "To collect art means to gather and acquire artworks, usually as a hobby or investment.", example: "Some wealthy individuals collect art as both a cultural interest and an investment." },
  { word: "To combat obesity", meaning: "To take action against obesity", explanation: "To take actions aimed at reducing the prevalence and effects of obesity within a population.", example: "Governments need to implement policies to combat obesity among children." },
  { word: "To compose a song", meaning: "Write a piece of music", explanation: "To compose a song means to create and write a piece of music.", example: "The musician composed a song inspired by her childhood experiences." },
  { word: "To consider the whole ecosystem", meaning: "Consider all environmental components", explanation: "To take into account all organisms and their environment in an area.", example: "Researchers must consider the whole ecosystem before intervention." },
  { word: "To create", meaning: "Bring something into existence", explanation: "To bring something into existence.", example: "Researchers aim to create technologies that improve the quality of human life." },
  { word: "To create art", meaning: "Produce works of art", explanation: "To create art means to produce original artistic work using different materials or forms.", example: "Many artists create art to express ideas that cannot easily be communicated through words." },
  { word: "To create/creative/a creation/a creator", meaning: "Bring something into existence", explanation: "To create means bring something into existence through imagination or effort.", example: "Creative individuals can generate valuable solutions to social problems." },
  { word: "To cultivate talent", meaning: "Develop natural ability", explanation: "To cultivate talent means to develop and improve an ability through practice and effort.", example: "Educational institutions should provide opportunities to cultivate young talent." },
  { word: "To delay the onset of Alzheimer’s disease", meaning: "To slow the beginning of Alzheimer's disease", explanation: "To slow down or postpone the beginning of the symptoms of Alzheimer's disease.", example: "Research aims to find ways to delay the onset of Alzheimer's disease through lifestyle changes." },
  { word: "To devise", meaning: "Invent a method", explanation: "To invent or develop a method for doing something.", example: "Researchers devised a new method for measuring pollution." },
  { word: "To discover", meaning: "Find something new", explanation: "To find something unexpectedly or during a search.", example: "Researchers may discover unexpected results while conducting experiments." },
  { word: "To discover/a discovery", meaning: "Find something new", explanation: "To discover means find something unexpectedly or through investigation.", example: "The discovery changed scientists' understanding of the phenomenon." },
  { word: "To do an MA/MSc/PhD in", meaning: "To study for an advanced degree in a subject", explanation: "To study for an advanced academic qualification, such as a master's or doctorate, in a particular field.", example: "She plans to do an MSc in engineering." },
  { word: "To do research", meaning: "To conduct systematic investigation", explanation: "To conduct a systematic investigation into a subject in order to discover new facts or reach new conclusions.", example: "Researchers often do research to identify effective treatments." },
  { word: "To evaluate/grade performance/ability/level of motivation", meaning: "To assess quality or ability", explanation: "To assess or measure the quality of something, such as a student's performance, ability, or motivation.", example: "Teachers evaluate and grade students' performance and level of motivation throughout the term." },
  { word: "To exhibit art", meaning: "Display art publicly", explanation: "To exhibit art means to display works of art for public viewing, usually in a gallery or museum.", example: "The gallery will exhibit art from emerging international artists." },
  { word: "To forage", meaning: "To search for food in the wild", explanation: "To search for and gather food from the natural environment, especially among wild plants.", example: "Animals forage for food in the wild when other sources are scarce." },
  { word: "To have talent", meaning: "Possess natural ability", explanation: "To have talent means to possess a natural ability or skill in a particular area.", example: "She has considerable talent for music and hopes to develop it professionally." },
  { word: "To innovate", meaning: "Introduce new ideas or methods", explanation: "To introduce new ideas, products, or ways of doing something.", example: "Companies must innovate continuously if they want to remain competitive." },
  { word: "To innovate/innovative/innovation/an innovator", meaning: "Introduce new ideas", explanation: "To innovate means introduce new ideas, methods, or products.", example: "Innovative companies invest heavily in research and development." },
  { word: "To invent", meaning: "Create something new", explanation: "To design or create something such as a machine or process that did not exist before.", example: "Scientists continually attempt to invent technologies that can solve complex problems." },
  { word: "To invent/inventive/an invention/an inventor", meaning: "Create something new", explanation: "To invent means create; inventive describes creativity; an invention is a new creation.", example: "Inventive engineers often develop solutions to complex problems." },
  { word: "To nurture talent", meaning: "Support talent development", explanation: "To nurture talent means to encourage and support the growth and development of someone's abilities.", example: "Schools have an important responsibility to nurture talent among younger generations." },
  { word: "To patent", meaning: "Obtain exclusive legal rights", explanation: "To obtain the exclusive rights to make, use, or sell an invention.", example: "The company decided to patent the technology before making it commercially available." },
  { word: "To patent/a patent", meaning: "Obtain legal invention rights", explanation: "To patent means obtain exclusive legal rights over an invention.", example: "The inventor decided to patent the new technology." },
  { word: "To perform a play", meaning: "Act out a play", explanation: "To perform a play means to present a theatrical work in front of an audience.", example: "The students performed a play based on a famous historical event." },
  { word: "To pioneer", meaning: "Be among the first to develop", explanation: "To be the first to develop or explore a new area of knowledge or activity.", example: "The research team pioneered a new method of analysing genetic data." },
  { word: "To pioneer/a pioneer", meaning: "Develop something first", explanation: "To pioneer means be among the first to develop or explore something.", example: "The scientist pioneered a new approach to medical research." },
  { word: "To play a song", meaning: "Perform a piece of music", explanation: "To play a song means to perform or reproduce it using an instrument or voice.", example: "The musician played a song for the audience at the beginning of the concert." },
  { word: "To pose for a photo", meaning: "Position yourself for a photograph", explanation: "To pose for a photo means to position yourself in a particular way for a photograph.", example: "The participants posed for a photo after completing the event." },
  { word: "To publish a photo", meaning: "Make a photo publicly available", explanation: "To publish a photo means to make it available to the public through print or digital media.", example: "She decided to publish the photo online after receiving permission." },
  { word: "To push back the limits/frontiers", meaning: "Expand the boundaries of knowledge", explanation: "To discover new things about something or a better way of doing it.", example: "Scientific research continues to push back the limits of human knowledge." },
  { word: "To put a tax on fizzy/sugary drinks", meaning: "To add a tax on sugary drinks", explanation: "The act of adding a tax to sugary or carbonated drinks in order to discourage their consumption.", example: "Many countries are putting a tax on fizzy and sugary drinks to reduce sugar intake." },
  { word: "To record a song", meaning: "Capture a musical performance", explanation: "To record a song means to capture and store a musical performance using recording equipment.", example: "The band recorded a song in a professional studio." },
  { word: "To rehearse a play", meaning: "Practise a theatrical performance", explanation: "To rehearse a play means to practise it before the actual performance.", example: "The actors rehearsed the play for several weeks before opening night." },
  { word: "To stage a play", meaning: "Organise a theatrical performance", explanation: "To stage a play means to organise and arrange its performance for an audience.", example: "The theatre decided to stage a play addressing contemporary social issues." },
  { word: "To take a photo", meaning: "Capture an image", explanation: "To take a photo means to capture an image using a camera or another device.", example: "Tourists often take photos to document important moments during their travels." },
  { word: "To tempt us to buy more", meaning: "Encourage additional purchases", explanation: "To tempt consumers to buy more means to attract or persuade them to make additional purchases.", example: "Retailers often use special offers to tempt consumers to buy more." },
  { word: "Trade winds", meaning: "Persistent tropical winds", explanation: "Persistent winds that blow across tropical regions.", example: "Trade winds influence weather patterns across tropical oceans." },
  { word: "Tradition/traditional", meaning: "Custom passed through generations", explanation: "Tradition refers to customs or beliefs passed from one generation to another, while traditional describes practices that have existed for a long time.", example: "Traditional festivals often reflect the historical identity of a community." },
  { word: "TV advertising", meaning: "Advertising shown on television", explanation: "Promotional messages broadcast through television channels to encourage viewers to buy products.", example: "Restrictions on TV advertising can influence children's food choices." },
  { word: "Undergraduate/postgraduate", meaning: "First-degree or advanced-degree students", explanation: "Students studying for first degrees (undergraduate) or for advanced degrees such as a master's or PhD (postgraduate).", example: "Both undergraduate and postgraduate students use the university library." },
  { word: "Up-to-date", meaning: "Current and recent", explanation: "Up-to-date means incorporating the most recent information, technology, or developments.", example: "Researchers need access to up-to-date scientific information." },
  { word: "Upgrade", meaning: "Improve to a newer version", explanation: "To replace software or equipment with a newer or better version.", example: "Companies regularly upgrade their digital infrastructure." },
  { word: "Urban planning", meaning: "Planning city structure", explanation: "The process of designing and organizing the structure of a city.", example: "Effective urban planning can improve transportation and housing." },
  { word: "User-friendly", meaning: "Easy for people to use", explanation: "User-friendly describes something that is easy to understand and operate, even for non-experts.", example: "A user-friendly website can make public services more accessible." },
  { word: "Video conferencing", meaning: "Meetings through video technology", explanation: "Communication between people in different locations using video technology.", example: "Video conferencing has expanded access to international education." },
  { word: "Volunteer", meaning: "Person offering participation freely", explanation: "A person who offers to participate or provide services without payment.", example: "Each volunteer received detailed information before the study." },
  { word: "Waste water", meaning: "Used contaminated water", explanation: "Water that has been used and contaminated by human activities.", example: "Waste water must be treated before being released into rivers." },
  { word: "Weight-loss surgery", meaning: "Surgery that helps people lose weight", explanation: "Medical procedures designed to help individuals lose a significant amount of weight when other methods have failed.", example: "Weight-loss surgery is becoming more common among severely obese patients." },
  { word: "Wireless hotspot/network", meaning: "Wireless internet connection", explanation: "A wireless system providing network or internet access.", example: "The university provides a wireless network across the campus." },
  { word: "Word processing", meaning: "Creating and editing documents", explanation: "Using computer software to create, edit, and format written documents.", example: "Word processing software is essential for academic writing." }
];
// App state

const state = {
  currentWord: null,
  wordPool: [],
  hasAnswered: false,
  score: 0,
  streak: 0,
  isListOpen: false,
  savedWords: JSON.parse(localStorage.getItem('purrwords_saved') || '[]')
};

const elements = {
  layout: document.getElementById('layout'),
  wordText: document.getElementById('wordText'),
  options: document.getElementById('options'),
  sentenceBox: document.getElementById('sentenceBox'),
  explainButton: document.getElementById('btnExplain'),
  listButton: document.getElementById('btnList'),
  addButton: document.getElementById('btnAdd'),
  nextButton: document.getElementById('btnNext'),
  explainWrap: document.getElementById('explainWrap'),
  explainText: document.getElementById('explainText'),
  sidebar: document.getElementById('sidebar'),
  listItems: document.getElementById('listItems'),
  scoreValue: document.getElementById('scoreVal'),
  streakValue: document.getElementById('streakVal'),
  searchToggle: document.getElementById('btnSearch'),
  searchOverlay: document.getElementById('searchOverlay'),
  searchInput: document.getElementById('searchInput'),
  searchResults: document.getElementById('searchResults'),
  searchClose: document.getElementById('btnSearchClose')
};

// Helpers

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function pickDistractors(correctEntry, count) {
  const candidates = VOCAB.filter((entry) => entry.meaning !== correctEntry.meaning);
  shuffle(candidates);

  const distractors = [];
  const seen = new Set([correctEntry.meaning]);

  for (const candidate of candidates) {
    if (distractors.length >= count) break;
    if (seen.has(candidate.meaning)) continue;
    seen.add(candidate.meaning);
    distractors.push(candidate.meaning);
  }

  return distractors;
}

function restartAnimation(element, className) {
  if (!element) return;
  element.classList.remove(className);
  void element.offsetWidth; // force reflow so the animation replays
  element.classList.add(className);
}

function highlightSentence(entry) {
  const sentence = entry.example || '';
  const coreWord = entry.word
    .split('=')[0]
    .split('/')[0]
    .trim()
    .replace(/^(to |a |an )/i, '')
    .trim();

  if (coreWord.length <= 3) return sentence;

  const pattern = new RegExp('(' + coreWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'i');
  if (pattern.test(sentence)) {
    return sentence.replace(pattern, '<mark>$1</mark>');
  }

  return sentence;
}

// Core game flow

function loadNextWord() {
  if (state.wordPool.length === 0) {
    state.wordPool = shuffle([...VOCAB]);
  }

  state.currentWord = state.wordPool.pop();
  state.hasAnswered = false;

  elements.wordText.textContent = state.currentWord.word;
  elements.sentenceBox.innerHTML = highlightSentence(state.currentWord);
  restartAnimation(document.querySelector('.word-box'), 'enter');
  restartAnimation(elements.sentenceBox, 'enter');

  elements.explainWrap.classList.remove('open');
  elements.explainText.textContent = state.currentWord.explanation;
  elements.explainButton.classList.remove('on');
  elements.nextButton.classList.remove('show');
  updateAddButtonState();

  const distractors = pickDistractors(state.currentWord, 4);
  const choices = shuffle([state.currentWord.meaning, ...distractors]);

  elements.options.innerHTML = '';
  choices.forEach((choiceText, index) => {
    const button = document.createElement('button');
    button.className = 'opt enter';
    button.style.animationDelay = index * 0.06 + 's';
    button.textContent = choiceText;
    button.onclick = () => selectAnswer(button, choiceText);
    elements.options.appendChild(button);
  });
}

function selectAnswer(button, choiceText) {
  if (state.hasAnswered) return;
  state.hasAnswered = true;

  const isCorrect = choiceText === state.currentWord.meaning;

  [...elements.options.children].forEach((option) => {
    option.disabled = true;
    if (option.textContent === state.currentWord.meaning) {
      option.classList.add('correct');
    }
  });

  if (!isCorrect) button.classList.add('wrong');

  if (isCorrect) {
    state.score++;
    state.streak++;
  } else {
    state.streak = 0;
  }

  elements.scoreValue.textContent = state.score;
  elements.streakValue.textContent = state.streak;
  restartAnimation(elements.scoreValue, 'pulse');
  restartAnimation(elements.streakValue, 'pulse');

  setTimeout(() => elements.nextButton.classList.add('show'), 250);
}

// Explanation panel + saved word list

function toggleExplanation() {
  restartAnimation(elements.explainButton, 'tap');
  const isOpen = elements.explainWrap.classList.toggle('open');
  elements.explainButton.classList.toggle('on', isOpen);
}

function toggleSavedList() {
  restartAnimation(elements.listButton, 'tap');
  state.isListOpen = !state.isListOpen;
  elements.layout.classList.toggle('list-open', state.isListOpen);
  renderSavedList();
}

function updateAddButtonState() {
  const alreadySaved = state.savedWords.some((item) => item.word === state.currentWord.word);
  elements.addButton.classList.toggle('added', alreadySaved);
}

function saveCurrentWord() {
  restartAnimation(elements.addButton, 'tap');
  if (!state.currentWord) return;
  if (state.savedWords.some((item) => item.word === state.currentWord.word)) return;

  state.savedWords.unshift({
    word: state.currentWord.word,
    meaning: state.currentWord.meaning
  });

  localStorage.setItem('purrwords_saved', JSON.stringify(state.savedWords));
  updateAddButtonState();
  renderSavedList();
}

function removeSavedWord(word) {
  state.savedWords = state.savedWords.filter((item) => item.word !== word);
  localStorage.setItem('purrwords_saved', JSON.stringify(state.savedWords));
  updateAddButtonState();
  renderSavedList();
}

function renderSavedList() {
  if (!state.isListOpen) return;

  elements.listItems.innerHTML = '';

  if (state.savedWords.length === 0) {
    elements.listItems.innerHTML = '<div class="empty">No words saved yet — hit add on any word.</div>';
    return;
  }

  state.savedWords.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'list-item';
    row.innerHTML = '<div><b></b><span></span></div><button title="Remove">×</button>';
    row.querySelector('b').textContent = item.word;
    row.querySelector('span').textContent = item.meaning;
    row.querySelector('button').onclick = () => removeSavedWord(item.word);
    elements.listItems.appendChild(row);
  });
}

// Search overlay (magnifying-glass lookup)

function openSearch() {
  elements.searchOverlay.classList.add('open');
  elements.searchToggle.classList.add('active');
  elements.searchInput.value = '';
  renderSearchResults('');
  setTimeout(() => elements.searchInput.focus(), 50);
}

function closeSearch() {
  elements.searchOverlay.classList.remove('open');
  elements.searchToggle.classList.remove('active');
}

function toggleSearch() {
  if (elements.searchOverlay.classList.contains('open')) {
    closeSearch();
  } else {
    openSearch();
  }
}

function renderSearchResults(query) {
  const q = query.trim().toLowerCase();
  elements.searchResults.innerHTML = '';

  if (!q) {
    elements.searchResults.innerHTML = '<div class="search-empty">Start typing to look up a word\'s meaning.</div>';
    return;
  }

  const matches = VOCAB.filter((entry) => entry.word.toLowerCase().includes(q)).slice(0, 30);

  if (matches.length === 0) {
    elements.searchResults.innerHTML = '<div class="search-empty">No matches found.</div>';
    return;
  }

  matches.forEach((entry) => {
    const card = document.createElement('div');
    card.className = 'search-result';
    card.innerHTML =
      '<div class="sr-word"></div>' +
      '<div class="sr-meaning"></div>' +
      '<div class="sr-translation"><b>Meaning:</b> <span class="sr-t-meaning"></span><br><b>Explanation:</b> <span class="sr-t-explanation"></span><br><b>Example:</b> <span class="sr-t-example"></span></div>';

    card.querySelector('.sr-word').textContent = entry.word;
    card.querySelector('.sr-meaning').textContent = entry.meaning;
    card.querySelector('.sr-t-meaning').textContent = entry.meaning;
    card.querySelector('.sr-t-explanation').textContent = entry.explanation;
    card.querySelector('.sr-t-example').textContent = entry.example;

    card.onclick = () => card.classList.toggle('expanded');
    elements.searchResults.appendChild(card);
  });
}

elements.searchToggle.onclick = toggleSearch;
elements.searchClose.onclick = closeSearch;
elements.searchInput.oninput = (event) => renderSearchResults(event.target.value);
elements.searchOverlay.onclick = (event) => {
  if (event.target === elements.searchOverlay) closeSearch();
};
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && elements.searchOverlay.classList.contains('open')) {
    closeSearch();
  }
});

// Wire up events and start the game

elements.explainButton.onclick = toggleExplanation;
elements.listButton.onclick = toggleSavedList;
elements.addButton.onclick = saveCurrentWord;
elements.nextButton.onclick = loadNextWord;

try {
  state.wordPool = shuffle([...VOCAB]);
  loadNextWord();
} catch (error) {
  document.body.innerHTML = '<p style="padding:40px;font-family:sans-serif">Could not load vocabulary data.</p>';
}
