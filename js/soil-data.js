const soils = [
  {
    id:'alluvial',name:'Alluvial Soil',tag:'River Soil',emoji:'🟤',bg:'#8B6914',
    idealMin:40,idealMax:60,
    desc:'Highly fertile soil deposited by rivers. Rich in minerals, nutrients and organic matter. Found mainly in river plains and deltas. Most widely cultivated soil in India.',
    facts:['Most fertile soil type','Found in river plains and deltas','Rich in potash, phosphoric acid and lime','Light to medium texture','Excellent for agriculture'],
    irr:'Water every 5-7 days. Alluvial soil has good water retention. Ensure proper drainage to avoid waterlogging. Drip irrigation works best for this soil type.',
    crops:'Rice, Wheat, Sugarcane, Cotton, Jute, Maize',
    found:'Indo-Gangetic plain, river deltas, coastal areas'
  },
  {
    id:'black',name:'Black Soil',tag:'Cotton Soil',emoji:'⚫',bg:'#2C2C2C',
    idealMin:30,idealMax:50,
    desc:'Dark clay soil also known as Black Cotton Soil or Regur. High water retention and rich in calcium, magnesium and iron. Ideal for growing cotton.',
    facts:['High water retention capacity','Rich in calcium and magnesium','Swells when wet, cracks when dry','Self-ploughing due to expansion','Low in nitrogen and phosphorus'],
    irr:'Water deeply but infrequently every 7-10 days. Black soil retains moisture well. Avoid overwatering as it becomes sticky and unworkable. Monitor cracks as indicator of dryness.',
    crops:'Cotton, Soybean, Wheat, Jowar, Sunflower, Tobacco',
    found:'Deccan plateau, Maharashtra, Gujarat, Madhya Pradesh'
  },
  {
    id:'red',name:'Red Soil',tag:'Iron Rich',emoji:'🔴',bg:'#A03020',
    idealMin:20,idealMax:40,
    desc:'Iron-rich reddish colored soil. Well drained but generally low in nutrients and organic matter. Gets its red color from iron oxide content.',
    facts:['Red color due to iron oxide','Well drained and porous','Low in nitrogen, phosphorus and organic matter','Becomes yellow in lower layers','Needs fertilizers for good yield'],
    irr:'Water every 3-5 days as red soil drains quickly. Use drip irrigation for efficiency. Add organic matter to improve water retention. Mulching helps prevent rapid moisture loss.',
    crops:'Groundnut, Tobacco, Millets, Potato, Rice, Wheat',
    found:'Eastern and southern Deccan plateau, Tamil Nadu, Odisha'
  },
  {
    id:'clay',name:'Clay Soil',tag:'Heavy Soil',emoji:'🟤',bg:'#6B4C11',
    idealMin:50,idealMax:70,
    desc:'Heavy soil with very fine particles. Excellent nutrient content but poor drainage. Sticky when wet and hard when dry. Requires careful water management.',
    facts:['Holds nutrients very well','Slow draining — prone to waterlogging','Very sticky and plastic when wet','Cracks and becomes hard when dry','Warms up slowly in spring'],
    irr:'Water deeply but infrequently every 7-10 days. Allow top 5-10cm to dry between waterings. Avoid light frequent watering. Ensure good drainage to prevent waterlogging.',
    crops:'Rice, Lettuce, Cabbage, Broccoli, Chard, Beans',
    found:'River valleys, flood plains, low-lying areas'
  },
  {
    id:'laterite',name:'Laterite Soil',tag:'Tropical Soil',emoji:'🟠',bg:'#C45E2A',
    idealMin:35,idealMax:55,
    desc:'Formed in tropical regions with high rainfall. Rich in iron and aluminum oxides giving reddish color. Soft when wet, very hard when dry. Low in fertility.',
    facts:['Rich in iron oxides — reddish color','Poor in nutrients due to heavy leaching','Hardens to brick-like consistency when dry','Common in tropical regions','Needs heavy fertilization'],
    irr:'Water every 3-5 days. Laterite dries and hardens quickly. Add compost to improve water retention. Mulching is very effective. Maintain consistent moisture to prevent hardening.',
    crops:'Tea, Coffee, Cashew, Coconut, Rubber, Pineapple',
    found:'Karnataka, Kerala, Tamil Nadu, Assam, Meghalaya'
  },
  {
    id:'loam',name:'Loam Soil',tag:'Ideal Soil',emoji:'🟫',bg:'#7B5E3A',
    idealMin:40,idealMax:60,
    desc:'Ideal mix of sand, silt and clay. Best soil for farming with excellent drainage and water retention balance. Rich in organic matter and nutrients.',
    facts:['Best balance of drainage and moisture','Rich in nutrients and organic matter','Easy to work with','Great aeration for root development','Supports widest variety of crops'],
    irr:'Easiest soil to manage. Water every 4-6 days when top 2-3cm is dry. Deep infrequent watering encourages deep root systems. Rarely needs special treatment.',
    crops:'Almost all crops — Wheat, Corn, Vegetables, Fruits',
    found:'Agricultural plains, temperate regions worldwide'
  },
  {
    id:'arid',name:'Arid Soil',tag:'Desert Soil',emoji:'🏜️',bg:'#C8A850',
    idealMin:10,idealMax:25,
    desc:'Dry desert soil with very low organic matter and high salt content. Found in arid and semi-arid regions. Requires heavy irrigation and management.',
    facts:['Very low organic matter','High salt content','Sandy texture and porous','Low water retention','Needs heavy fertilization and irrigation'],
    irr:'Needs frequent irrigation every 2-3 days. Use drip irrigation for water efficiency. Add organic matter regularly. Mulching essential to prevent evaporation. Avoid flood irrigation.',
    crops:'Millets, Barley, Cotton, Dates, Drought-resistant crops',
    found:'Rajasthan, Gujarat desert regions, arid zones'
  },
  {
    id:'mountain',name:'Mountain Soil',tag:'Forest Soil',emoji:'⛰️',bg:'#4A6741',
    idealMin:50,idealMax:70,
    desc:'Found in hilly and mountainous areas. Acidic in nature and rich in organic matter but shallow in depth. Prone to erosion on steep slopes.',
    facts:['Acidic pH (4.5-6.0)','Rich in humus and organic matter','Shallow depth — limited for farming','Prone to soil erosion','Good for forest crops and fruits'],
    irr:'Water carefully every 3-4 days. Mountain soil has good moisture from rainfall. Avoid overwatering on slopes to prevent erosion. Terrace farming helps retain water and soil.',
    crops:'Tea, Coffee, Fruits, Potatoes, Medicinal plants, Spices',
    found:'Himalayas, Western Ghats, Northeastern hills'
  },
  {
    id:'yellow',name:'Yellow Soil',tag:'Humid Soil',emoji:'🟡',bg:'#C8A030',
    idealMin:35,idealMax:55,
    desc:'Yellow colored due to iron oxidation in hydrated form. Found in humid regions with moderate rainfall. Moderate fertility and good drainage properties.',
    facts:['Yellow due to hydrated iron oxide','Moderate fertility','Good drainage properties','Found in humid regions','Needs organic matter addition'],
    irr:'Water every 4-6 days. Yellow soil has moderate water retention. Add organic matter to improve fertility. Monitor moisture regularly especially in dry seasons.',
    crops:'Rice, Sweet Potato, Corn, Tobacco, Groundnut',
    found:'Humid subtropical regions, parts of South and East India'
  },
  {
    id:'cinder',name:'Cinder Soil',tag:'Volcanic Soil',emoji:'🌋',bg:'#3A3A3A',
    idealMin:25,idealMax:45,
    desc:'Volcanic origin soil with excellent drainage. Rich in minerals but low in organic matter. Formed from volcanic ash and cinders. Unique texture and composition.',
    facts:['Volcanic origin — rich in minerals','Excellent drainage','Low in organic matter','Unique porous structure','Good aeration for roots'],
    irr:'Water every 2-3 days due to fast drainage. Add compost to improve water retention. Drip irrigation is most efficient. Mulching helps retain moisture significantly.',
    crops:'Grapes, Olives, Lavender, Herbs, Succulents, Cacti',
    found:'Volcanic regions, parts of Deccan plateau'
  },
  {
    id:'sandy',name:'Sandy Soil',tag:'Light Soil',emoji:'🏖️',bg:'#D4B483',
    idealMin:15,idealMax:30,
    desc:'Light, coarse-grained soil with large particles. Drains very quickly and warms up fast in spring. Low in nutrients but easy to work with.',
    facts:['Very fast drainage','Low water retention','Warms up quickly in spring','Low in nutrients','Easy to cultivate and work with'],
    irr:'Water frequently every 1-2 days as sandy soil drains very fast. Use drip irrigation for best efficiency. Add organic matter and mulch heavily to retain moisture.',
    crops:'Carrots, Potatoes, Peanuts, Watermelon, Herbs',
    found:'Coastal areas, desert fringes, river banks worldwide'
  },
  {
    id:'chalky',name:'Chalky Soil',tag:'Alkaline Soil',emoji:'⬜',bg:'#C8C0A8',
    idealMin:25,idealMax:45,
    desc:'Alkaline soil containing calcium carbonate or lime. Often shallow and stony. Free draining and can be very dry in summer. Limits which plants can grow.',
    facts:['High pH — alkaline nature','Contains calcium carbonate','Free draining and dry in summer','Can cause nutrient deficiencies','Limits plant selection'],
    irr:'Water every 3-4 days. Chalky soil drains freely. Add acidic organic matter to balance pH. Use acid-loving plant fertilizers. Mulching helps retain moisture in summer.',
    crops:'Lavender, Spinach, Beets, Sweet Corn, Cabbage',
    found:'Chalk downlands, limestone areas, parts of Europe and Middle East'
  },
  {
    id:'peaty',name:'Peaty Soil',tag:'Bog Soil',emoji:'🟫',bg:'#5C4033',
    idealMin:55,idealMax:75,
    desc:'Dark, spongy soil rich in organic matter formed from decomposed plant material. Holds large amounts of water. Found in boggy and marshy areas.',
    facts:['Very high organic matter content','Excellent water retention','Acidic in nature','Dark brown to black color','Spongy and compressible texture'],
    irr:'Rarely needs irrigation — retains water naturally. Ensure good drainage to prevent waterlogging. Add lime to reduce acidity if needed. Best suited for moisture-loving plants.',
    crops:'Blueberries, Cranberries, Heathers, Rhododendrons, Sedges',
    found:'Bogs, marshes, fenlands, Scotland, Ireland, parts of India'
  },
  {
    id:'silt',name:'Silt Soil',tag:'Smooth Soil',emoji:'🌊',bg:'#8B9E7A',
    idealMin:35,idealMax:55,
    desc:'Fine-grained fertile soil with smooth texture. Better water retention than sandy soil. Can become compacted easily. Found near rivers and lakes.',
    facts:['Fine smooth texture','Good water retention','Fertile and nutrient-rich','Can become compacted easily','Prone to erosion by water'],
    irr:'Water every 4-5 days. Silt retains moisture well. Avoid overwatering as it compacts easily. Add organic matter to improve structure. Avoid walking on wet silt soil.',
    crops:'Wheat, Rice, Vegetables, Fruits, Sugar Beet',
    found:'River banks, floodplains, lake shores worldwide'
  },
  {
    id:'saline',name:'Saline Soil',tag:'Salt Soil',emoji:'🧂',bg:'#B8A898',
    idealMin:20,idealMax:40,
    desc:'Soil with high concentration of soluble salts. Harmful to most plants as it prevents water absorption. Found in arid regions and coastal areas.',
    facts:['High salt concentration','Harmful to most plants','White salt crust on surface','Poor water absorption by plants','Needs special management'],
    irr:'Use fresh water irrigation to leach out salts. Water deeply and infrequently. Ensure excellent drainage. Add gypsum to improve soil structure. Grow only salt-tolerant crops.',
    crops:'Barley, Sugar Beet, Cotton, Mangroves, Salt-tolerant grasses',
    found:'Coastal areas, arid regions, irrigated farmlands'
  },
  {
    id:'chalk',name:'Chalk Soil',tag:'Limestone Soil',emoji:'🪨',bg:'#D4CFC0',
    idealMin:20,idealMax:40,
    desc:'Soil formed over chalk or limestone bedrock. Very alkaline with high calcium content. Thin and free draining. Can be challenging for many plants.',
    facts:['High calcium content','Very alkaline pH 7.5-8.5','Thin and shallow','Free draining','Limits nutrient availability'],
    irr:'Water every 3-5 days. Chalk soil drains rapidly. Add organic matter to improve water retention. Use acid fertilizers to balance pH. Mulch heavily to retain moisture.',
    crops:'Beech, Ash, Travellers Joy, Salad Burnet, Wild Thyme',
    found:'Chalk downlands of England, limestone regions of Europe'
  },
  {
    id:'forest',name:'Forest Soil',tag:'Woodland Soil',emoji:'🌲',bg:'#3D5C2E',
    idealMin:45,idealMax:65,
    desc:'Rich dark soil found under forest cover. Loaded with organic matter from fallen leaves and decomposing plant material. Excellent structure and fertility.',
    facts:['Very rich in organic matter','Excellent soil structure','High biological activity','Dark brown to black color','Self-replenishing through leaf litter'],
    irr:'Water every 4-5 days. Forest soil retains moisture well due to high organic content. Mulch with leaf litter to mimic natural conditions. Avoid compaction by heavy machinery.',
    crops:'Mushrooms, Berries, Medicinal herbs, Shade vegetables, Ginseng',
    found:'Temperate forests, tropical rainforests, woodland areas worldwide'
  }
];