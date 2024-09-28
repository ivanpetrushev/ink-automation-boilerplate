var storyContent = 
{"inkVersion":21,"root":[["#","^title: Operation Midnight Claw","/#","#","^author: Ivan Petrushev","/#",{"->":"a"},["done",{"#n":"g-0"}],null],"done",{"a":[["^Subject: Agent Raven","\n","^Preamble: Intel has confirmed that \"Drone Dynamics\" is currently processing an order to manufacture a new swarm of killer drones for a terrorist organisation. This mission is critical: we must obtain a drone prototype and uncover the identity of the client.","\n","^Mission: Infiltrate the \"Drone Dynamics\" manufacturing facility. Your objectives are to steal a physical drone prototype and retrieve order and shipping documents. Our organization has successfully hacked the building's security systems, allowing for a brief window where alarms and cameras will be disabled.","\n","^Agent Raven has two options for entry:","\n","^Daylight infiltration: Pose as a staff member to gain access. Raven could track down a real employee, steal their ID card, and use it to enter the building during regular business hours.","\n","^Nighttime covert operation: Sneak into the facility under the cover of darkness. Our support team will disable CCTV and basic security, but Raven will need to remain vigilant to avoid detection.","\n","ev","str","^Go in daylight","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Sneak in during night","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"b"},"\n",null],"c-1":["^ ",{"->":"c"},"\n",null]}],null],"b":[["^Raven parks in the \"Drone Dynamics\" lot, discreetly attaching a magnetic GPS tracker to the underside of a company car. He carefully selects a vehicle that appears frequently in the employee lot, maximizing the chances of it being used by an important staff member.","\n","^At 18:00, a group of employees spills out of the building, and one man climbs into the car Raven has tagged. Following closely, Raven keeps a low profile as they drive through the busy streets. After a few minutes, the car pulls into a supermarket parking lot. The employee goes inside to shop, providing Raven the perfect opportunity.","\n","^The employee exits bags in hand right into Raven’s chloroform. The man slumps into unconsciousness, and Raven retrieves his ID card. With a quick glance at the card, he adopts the identity of \"Billy Mohel,\" a quality control inspector.","\n","^Waiting for the next shift, Raven merges with a group of employees entering the facility. He passes through security without raising any alarms. Once inside the production building, he gives a signal to his team to cut CCTV feeds and begins to strategize his next moves.","\n","ev","str","^Plan the next actions","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"d"},"\n",null]}],{"#f":1}],"c":[["^Raven waits in the shadows as dusk settles in, watching the building from a concealed vantage point. As the evening shift finally spills out, the once-bustling facility falls silent, with darkened windows staring back at him. The time for action is now!","\n","^With a subtle signal, Raven instructs his team to cut the CCTV feeds, ensuring he won’t be spotted. He then scales a rain pipe, reaching the second floor with an ease. As he peers into the dimly lit area, he notices a terrace window left ajar - an oversight that could prove beneficial. It seems the staff have grown overly reliant on their motion sensors, unaware that those alarms have been disabled.","\n","^Quietly, he slips through the open window, entering the building and taking a moment to survey his surroundings. With the facility now his playground, Raven begins to strategize his next moves, mentally mapping out potential targets and escape routes.","\n","ev","str","^Plan the next actions","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"d"},"\n",null]}],{"#f":1}],"d":[["ev",{"VAR?":"time"},3,"==","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"k"},{"->":"d.0.6"},null]}],"nop","\n","^Raven stands ready within the facility, acutely aware that time is of the essence. A quick message from his support team vibrates in his earpiece:","\n",["ev",{"VAR?":"time"},0,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^“Time is of the essence. Intrusion detection soon will find our hack!”","\n",{"->":"d.0.13"},null]}],["ev",{"VAR?":"time"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^“Automated defenses are picking us up. Be quick!”","\n",{"->":"d.0.13"},null]}],["ev",{"VAR?":"time"},2,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^“We are discovered. Better get out soon!”","\n",{"->":"d.0.13"},null]}],"nop","\n","^The urgency fuels his focus as he mentally assembles his mission objectives: find the killer drone prototype and locate the order documents.","\n","^Wall map:","\n","ev","str","^First floor: research lab","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Second floor: accounting department","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Third floor: quality control office","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Get out of the building","/str","/ev",{"*":".^.c-3","flg":20},{"c-0":["^ ",{"->":"e"},"\n",{"#f":5}],"c-1":["^ ",{"->":"g"},"\n",{"#f":5}],"c-2":["^ ",{"->":"f"},"\n",{"#f":5}],"c-3":["^ ",{"->":"h"},"\n",{"#f":5}]}],null],"e":[["ev",true,"/ev",{"VAR=":"has_prototype","re":true},"ev",{"VAR?":"time"},1,"+",{"VAR=":"time","re":true},"/ev","^The research lab is lined with computers and electronic equipment.","\n","^Wall-mounted desks encircle a large central alcove, where a test harness dangles from the ceiling, crisscrossed with a tangle of cables. There, suspended in the air, is a remarkably small quadcopter. The prototype! Such a small machine capable of inflicting so much damage.","\n","^Raven carefully unclips the machine from the testing equipment, feeling the smooth surface of the drone in his hands.","\n","ev","str","^Plan next actions","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"d"},"\n",null]}],null],"f":["ev",{"VAR?":"time"},1,"+",{"VAR=":"time","re":true},"/ev","^Inside the quality control office, Raven hopes to find essential documentation regarding the drone's specifications, performance tests, and possibly shipment details that could lead to the buyers. However, as he approaches, he discovers the office is secured behind a robust door, its strength suggesting that it guards sensitive information. Next to it on the wall, a small RFID tag reader glows in red, waiting for an authorized card.","\n","ev",{"CNT?":"b"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"l"},{"->":"f.12"},null]}],"nop","\n","ev",{"CNT?":"c"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"m"},{"->":"f.18"},null]}],"nop","\n",null],"l":[["ev",true,"/ev",{"VAR=":"has_documents","re":true},"^Fortunately, Raven remembers he picked up an access control card from the employee he had followed earlier. He swipes it over the reader, and a green light flashes accompanied by a satisfying beep—the door clicks open!","\n","^Inside, the office is cramped, housing only a handful of desks, all eerily empty, awaiting the morning shift. The wall clock ticks, reminding him time is slipping away.","\n","^Raven quickly scours the room, bypassing the computers - there's no time for messing around. Instead, he focuses on the papers scattered across the desks and the occasional flash drive left behind. He manages to snag a handful of documents that look promising, a mix of contracts and performance reports, before slipping out just in time to avoid the incoming employees.","\n","ev","str","^Plan next actions","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"d"},"\n",null]}],null],"m":[["^Unfortunately, the door is locked tight. Raven swiftly tries to signal his support team, hoping they can unlock it remotely. He sends a quick message, his fingers tapping against the screen as the seconds tick by.","\n","^His team, already stretched thin trying to conceal their activities from the intrusion detection systems, struggle to respond. Minutes drag on, filled with tension and uncertainty, until he realizes they won’t make it in time. With a deep breath, Raven abandons this approach, knowing he must act quickly to fulfill his mission.","\n","ev","str","^Plan next actions","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"d"},"\n",null]}],null],"g":["ev",{"VAR?":"time"},1,"+",{"VAR=":"time","re":true},"/ev","^As Raven climbs the stairs toward the accounting department, a surge of optimism fills him. This is where every incoming and outgoing document is meticulously logged, and he hopes to find crucial intel on the drone’s buyer.","\n","^He reaches the door to the accounting office, ready to dive into the paperwork that could reveal the vital information he needs.","\n","ev",{"CNT?":"b"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"n"},{"->":"g.14"},null]}],"nop","\n","ev",{"CNT?":"c"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"o"},{"->":"g.20"},null]}],"nop","\n",null],"n":[["^Behind the door is a room filled with lockers, desks and... people! Several employees are already at their computers, quickly scanning through emails and paperwork. Raven’s nerves tighten; he’s surrounded by too many eyes to act freely.","\n","^He walks cautiously around the perimeter of the room, weighing his options. The clock ticks ominously, reminding him that he can’t linger for long.","\n","ev","str","^Plan next actions","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"d"},"\n",null]}],null],"o":[["ev",true,"/ev",{"VAR=":"has_documents","re":true},"^Raven enters a cramped room filled with lockers and desks, quickly making his way to the \"Shipment\" section of the archives.","\n","^His eyes glance over the last few orders and the number of items in the invoices. \"5... 10... 10 000!\" The numbers leap out at him - ten thousand \"mail delivery drones\" ordered by a foreign company. His pulse quickens; this could be the intel that links the drone project to a larger threat.","\n","^Raven is pretty sure he got the right documents.","\n","ev","str","^Plan next actions","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"d"},"\n",null]}],null],"k":["^Suddenly loud sound of sirens fill the air, sending a jolt of adrenaline through Raven!","\n","^His instincts scream at him to run, but before he can reach the exit, a barrage of gunfire erupts. He’s met with a wall of bullets, and pain lances through his chest.","\n","^What an odd company - its security seems more eager to shoot than to question. The world fades around him, and all Raven can think is that this mission ended far too soon...","\n","^THE END","\n","end",null],"h":["^Raven knows his time is running out, so he retraces his steps, escaping the building the same way he entered. A wave of relief washes over him as he leaves the \"Drone Dynamics\" facility behind. But did he get everything he came for?","\n","ev",{"VAR?":"has_documents"},{"VAR?":"has_prototype"},"&&","/ev",[{"->":".^.b","c":true},{"b":["^ Mission: success. The killer swarm drone buyer is identified. An ambush is set to capture the moment of delivery. Enough evidence is gathered to dismantle an international terrorist organization.",{"->":"h.8"},null]}],"nop","\n","ev",{"VAR?":"has_documents"},{"VAR?":"has_prototype"},"!","&&","/ev",[{"->":".^.b","c":true},{"b":["^ Mission: fail. The killer swarm drone buyer is identified, but not enough evidence was collected to bring down his organization.",{"->":"h.17"},null]}],"nop","\n","ev",{"VAR?":"has_documents"},"!",{"VAR?":"has_prototype"},"&&","/ev",[{"->":".^.b","c":true},{"b":["^ Mission: fail. The investigation shows the drone can be weaponized, but a weapon without evident intent serves little purpose.",{"->":"h.26"},null]}],"nop","\n","ev",{"VAR?":"has_documents"},"!",{"VAR?":"has_prototype"},"!","&&","/ev",[{"->":".^.b","c":true},{"b":["^ Mission: fail. Soon, a new series of terrorist events will unfold worldwide. Raven had the chance to stop it, but he blew it.",{"->":"h.36"},null]}],"nop","\n","^THE END","\n","end",null],"global decl":["ev",0,{"VAR=":"time"},false,{"VAR=":"has_prototype"},false,{"VAR=":"has_documents"},"/ev","end",null]}],"listDefs":{}}