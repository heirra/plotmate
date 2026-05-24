import type { StyleConfig, Product, PlacementZone } from '../types';

// ─────────────────────────────────────────────────────────────
// COTTAGE GARDEN
// ─────────────────────────────────────────────────────────────
const cottageProducts: Product[] = [
  { id: 'c1', name: "Lavender 'Hidcote'", subtitle: '2L pot · 3× along front border', category: 'Plants', quantity: 3, unitPrice: 6.99, emoji: '💜', retailers: ['Dobbies', 'RHS Plant Shop', 'Crocus'], placementZone: 'Front Border', placementNote: 'Plant 40cm apart along south-facing border edge. Trim after flowering.' },
  { id: 'c2', name: 'Hydrangea macrophylla', subtitle: '3L pot · Mid-border anchor', category: 'Plants', quantity: 2, unitPrice: 12.99, emoji: '🌸', retailers: ['Dobbies', 'B&Q', 'Crocus'], placementZone: 'Mid Border', placementNote: 'Place centre-back of border. Needs 1m spacing. Prune to old wood in March.' },
  { id: 'c3', name: "Foxglove 'Camelot Cream'", subtitle: '1L pot · Vertical accent', category: 'Plants', quantity: 4, unitPrice: 4.49, emoji: '🌱', retailers: ['RHS Plant Shop', 'Suttons'], placementZone: 'Back Border', placementNote: 'Plant at rear of borders for vertical rhythm. Self-seeds — allow some to naturalise.' },
  { id: 'c4', name: 'Hardy Geranium mix', subtitle: '2L pot · Ground-level filler', category: 'Plants', quantity: 4, unitPrice: 5.49, emoji: '🌿', retailers: ['Crocus', 'Dobbies'], placementZone: 'Border Edge', placementNote: 'Fill gaps at border front. Spills naturally onto path — trim back in July.' },
  { id: 'c5', name: 'Natural Stone Path Flags', subtitle: 'Sandstone, 45×30cm · 6-pack', category: 'Paving & Edging', quantity: 2, unitPrice: 34.99, emoji: '🪨', retailers: ['B&Q', 'Wickes', 'Marshalls'], placementZone: 'Central Path', placementNote: 'Lay informally from gate to seating area. Set in sharp sand 50mm deep. No mortar needed.' },
  { id: 'c6', name: 'Rustic Timber Edging', subtitle: '10× 120cm boards + stakes', category: 'Paving & Edging', quantity: 2, unitPrice: 22.99, emoji: '🪵', retailers: ['B&Q', 'Wickes'], placementZone: 'Border Edge', placementNote: 'Install along border fronts to contain soil and bark mulch. Hammer stakes every 90cm.' },
  { id: 'c7', name: 'Organic Bark Mulch', subtitle: '60L bag · 3 bags cover ~6m²', category: 'Soil & Ground Finish', quantity: 3, unitPrice: 7.99, emoji: '🍂', retailers: ['B&Q', 'Dobbies'], placementZone: 'All Borders', placementNote: 'Spread 70mm deep across all border surfaces. Keeps moisture in and weeds suppressed.' },
  { id: 'c8', name: 'Peat-free Compost', subtitle: '50L bag · Planting mix', category: 'Soil & Ground Finish', quantity: 2, unitPrice: 9.00, emoji: '🪴', retailers: ['B&Q', 'Dobbies'], placementZone: 'All Borders', placementNote: 'Fork one bag per 4m² into existing soil before planting. Improves drainage and nutrition.' },
  { id: 'c9', name: 'Trellis Panel', subtitle: '180×60cm diamond pattern', category: 'Privacy & Structure', quantity: 2, unitPrice: 19.99, emoji: '🪵', retailers: ['B&Q', 'Wickes', 'Screwfix'], placementZone: 'Boundary', placementNote: 'Fix to fence posts at boundary. Train climbing roses or clematis once established.' },
  { id: 'c10', name: 'Bistro Set 2-Seater', subtitle: 'Powder-coated steel, foldable', category: 'Furniture', quantity: 1, unitPrice: 119.00, emoji: '🪑', retailers: ['MADE', 'John Lewis', 'Argos'], placementZone: 'Seating Area', placementNote: 'Position on paved area or compacted ground, oriented toward the main border view.' },
  { id: 'c11', name: 'Festoon Lights', subtitle: '10m warm white LED · outdoor rated', category: 'Lighting', quantity: 1, unitPrice: 24.99, emoji: '💡', retailers: ['Amazon', 'B&Q'], placementZone: 'Overhead Zone', placementNote: 'String between trellis posts and fence at 2.2m height. Creates evening enclosure.' },
  { id: 'c12', name: 'Bypass Secateurs', subtitle: 'RHS approved, hardened steel', category: 'Tools & Care', quantity: 1, unitPrice: 18.99, emoji: '✂️', retailers: ['Dobbies', 'Amazon', 'B&Q'], placementZone: 'Tool Store', placementNote: 'Essential for cottage garden deadheading and pruning. Clean with oil after each use.' },
];

const cottagePlaZones: PlacementZone[] = [
  { id: 'cz1', label: 'Boundary & Screening', position: 'Along all fence lines, 30cm from boundary', purpose: 'Trellis panels create a backdrop for climbing plants and visually soften hard boundaries.', productIds: ['c9'] },
  { id: 'cz2', label: 'Back & Mid Border', position: 'Perimeter borders, 60–120cm deep', purpose: 'Tall foxgloves at rear, hydrangeas mid-border. Layers create visual depth and seasonal succession.', productIds: ['c2', 'c3'] },
  { id: 'cz3', label: 'Front Border Edge', position: 'Border fronts, along path edge', purpose: 'Lavender and hardy geraniums cascade to path edge — low maintenance once established.', productIds: ['c1', 'c4'] },
  { id: 'cz4', label: 'Central Path', position: 'Centre of garden, gate to seating area', purpose: 'Informal stone flags define circulation without rigidity — allows plants to spill between joints.', productIds: ['c5'] },
  { id: 'cz5', label: 'Seating Area', position: 'South-facing corner, 2×2m paved zone', purpose: 'Bistro set positioned to face border view. Festoon lights overhead extend usability into evening.', productIds: ['c10', 'c11'] },
  { id: 'cz6', label: 'Ground Finish (All Borders)', position: 'All planting bed surfaces', purpose: 'Bark mulch and timber edging contain planting beds, reduce weeding to once per season.', productIds: ['c6', 'c7', 'c8'] },
];

// ─────────────────────────────────────────────────────────────
// MODERN COURTYARD
// ─────────────────────────────────────────────────────────────
const modernProducts: Product[] = [
  { id: 'm1', name: 'Porcelain Paving Slabs', subtitle: '60×60cm grey, 6 per pack', category: 'Paving & Edging', quantity: 4, unitPrice: 54.99, emoji: '⬜', retailers: ['Marshalls', 'B&Q', 'Wickes'], placementZone: 'Main Paved Area', placementNote: 'Lay on mortar bed, 3mm joint. Cover full central zone. Professional laying recommended for large areas.' },
  { id: 'm2', name: 'Black Metal Edging Strip', subtitle: '10m roll · 150mm depth', category: 'Paving & Edging', quantity: 2, unitPrice: 27.99, emoji: '🔲', retailers: ['B&Q', 'Amazon', 'Wickes'], placementZone: 'Border Edge', placementNote: 'Install between paving and gravel or planting zones. Creates the clean separation defining the modern look.' },
  { id: 'm3', name: 'Boxwood Ball', subtitle: '30cm clipped sphere, 3L pot', category: 'Plants', quantity: 4, unitPrice: 14.99, emoji: '🌲', retailers: ['Dobbies', 'Crocus', 'RHS Plant Shop'], placementZone: 'Planting Pockets', placementNote: 'Position symmetrically in gravel pockets at corners or flanking entrance. Clip twice yearly.' },
  { id: 'm4', name: 'Ornamental Grass — Festuca', subtitle: 'Blue fescue, 1L pot', category: 'Plants', quantity: 6, unitPrice: 4.99, emoji: '🌾', retailers: ['Crocus', 'Dobbies'], placementZone: 'Planting Pockets', placementNote: 'Group in threes in gravel beds between pavers. Provides movement contrast against rigid geometry.' },
  { id: 'm5', name: 'Silver Decorative Gravel', subtitle: '20kg bag · Grey quartzite', category: 'Soil & Ground Finish', quantity: 5, unitPrice: 8.50, emoji: '🪨', retailers: ['B&Q', 'Wickes', 'Toolstation'], placementZone: 'Gravel Beds', placementNote: 'Lay 50mm deep over weed membrane in all non-paved zones. Ties the palette together.' },
  { id: 'm6', name: 'Weed Suppression Membrane', subtitle: '2×10m heavy-duty roll', category: 'Soil & Ground Finish', quantity: 1, unitPrice: 12.99, emoji: '🏗️', retailers: ['B&Q', 'Wickes'], placementZone: 'Gravel Beds', placementNote: 'Lay under all gravel areas. Overlap edges 15cm and pin with membrane pegs. Do not skip this step.' },
  { id: 'm7', name: 'Bamboo Screening Panel', subtitle: '180×90cm · Natural cane', category: 'Privacy & Structure', quantity: 3, unitPrice: 29.99, emoji: '🎋', retailers: ['B&Q', 'Amazon'], placementZone: 'Boundary', placementNote: 'Attach to existing fence posts. Creates consistent neutral backdrop that grounds the planting palette.' },
  { id: 'm8', name: 'Outdoor Lounge Set', subtitle: '2-seat sofa + coffee table, all-weather', category: 'Furniture', quantity: 1, unitPrice: 349.00, emoji: '🛋️', retailers: ['MADE', 'John Lewis', 'Dobbies'], placementZone: 'Seating Area', placementNote: 'Place against screening panel boundary, centred on paved zone. Face toward planting for enclosed feel.' },
  { id: 'm9', name: 'LED Spike Path Lights', subtitle: 'Set of 4 · Stainless, solar', category: 'Lighting', quantity: 2, unitPrice: 34.99, emoji: '🔦', retailers: ['B&Q', 'Amazon', 'IKEA'], placementZone: 'Path Edge', placementNote: 'Spike into gravel at path edges, 1m apart. Low and directional — keeps the look uncluttered at night.' },
  { id: 'm10', name: 'Concrete Planter', subtitle: '40cm square, fibrecrete', category: 'Pots & Planters', quantity: 2, unitPrice: 34.99, emoji: '⬜', retailers: ['MADE', 'John Lewis'], placementZone: 'Entry Flanking', placementNote: 'Position one each side of patio entry. Plant with single boxwood ball or Phormium for vertical accent.' },
];

const modernPlaZones: PlacementZone[] = [
  { id: 'mz1', label: 'Main Paved Zone', position: 'Central area, full width of space', purpose: 'Porcelain paving establishes the level, flat surface that anchors the entire composition.', productIds: ['m1'] },
  { id: 'mz2', label: 'Boundary Screening', position: 'All fence lines behind paving', purpose: 'Bamboo panels create a neutral, textured vertical plane that contains the space and hides bare fence.', productIds: ['m7'] },
  { id: 'mz3', label: 'Gravel Planting Beds', position: 'Narrow beds around paving perimeter', purpose: 'Black edging defines the boundary between paving and gravel. Weed membrane + gravel reduces maintenance to near zero.', productIds: ['m2', 'm5', 'm6'] },
  { id: 'mz4', label: 'Planting Pockets', position: 'Within gravel beds at regular intervals', purpose: 'Boxwood spheres give geometric mass. Festuca grass provides textural contrast and seasonal movement.', productIds: ['m3', 'm4'] },
  { id: 'mz5', label: 'Seating Area', position: 'Rear of paved zone, against screening', purpose: 'Lounge set placed against boundary screening creates enclosure on three sides — comfortable for extended outdoor use.', productIds: ['m8', 'm9'] },
  { id: 'mz6', label: 'Entry Flanking', position: 'Either side of patio entrance', purpose: 'Concrete planters mark the transition from path to patio. Symmetry reinforces the geometric order of the design.', productIds: ['m10'] },
];

// ─────────────────────────────────────────────────────────────
// WILDLIFE GARDEN
// ─────────────────────────────────────────────────────────────
const wildlifeProducts: Product[] = [
  { id: 'w1', name: 'Native Wildflower Seed Mix', subtitle: 'Cornflower, Poppy, Ox-eye Daisy', category: 'Plants', quantity: 2, unitPrice: 4.99, emoji: '🌼', retailers: ['Dobbies', 'RHS Plant Shop', 'Suttons Seeds'], placementZone: 'Wildflower Meadow Patch', placementNote: 'Clear a 2×2m area of lawn. Scarify, rake, scatter seed in autumn or spring. Do not fertilise.' },
  { id: 'w2', name: 'Pollinator Perennial Mix', subtitle: 'Echinacea, Rudbeckia, Verbena, 1L', category: 'Plants', quantity: 5, unitPrice: 5.49, emoji: '🌻', retailers: ['Crocus', 'Dobbies', 'RHS Plant Shop'], placementZone: 'Perennial Border', placementNote: 'Plant in informal drifts along sunny border. Leave seed heads standing through winter — vital bird food.' },
  { id: 'w3', name: 'Hawthorn Hedging', subtitle: 'Bare root, 60–90cm, pack of 5', category: 'Plants', quantity: 1, unitPrice: 19.99, emoji: '🌳', retailers: ['Dobbies', 'RHS Plant Shop', 'Crocus'], placementZone: 'Boundary Hedge', placementNote: 'Plant Nov–March along boundary as informal hedge. Berries for birds in autumn, nesting habitat in spring.' },
  { id: 'w4', name: 'Bird Bath', subtitle: 'Ceramic shallow dish, 35cm', category: 'Decor & Habitat', quantity: 1, unitPrice: 34.99, emoji: '🐦', retailers: ['RSPB Shop', 'Dobbies', 'Amazon'], placementZone: 'Central Feature', placementNote: 'Place in open sightline, 2m from dense cover. Birds need to see approaching cats. Refill daily.' },
  { id: 'w5', name: 'Log Pile Habitat Kit', subtitle: 'Mixed native timber, 4 logs', category: 'Decor & Habitat', quantity: 1, unitPrice: 24.99, emoji: '🪵', retailers: ['Amazon', 'Dobbies', 'RSPB Shop'], placementZone: 'Habitat Corner', placementNote: 'Stack in a shaded corner against boundary. Leave undisturbed — habitat for stag beetles, hedgehogs, frogs.' },
  { id: 'w6', name: 'Hedgehog House', subtitle: 'FSC timber, weatherproof entrance', category: 'Decor & Habitat', quantity: 1, unitPrice: 19.99, emoji: '🦔', retailers: ['RSPB Shop', 'Amazon'], placementZone: 'Habitat Corner', placementNote: 'Position in a quiet corner under shrubs. Face entrance away from prevailing wind. Fill with dry leaves.' },
  { id: 'w7', name: 'Bug Hotel Tower', subtitle: 'Bamboo, pine cone, clay fills, 60cm', category: 'Decor & Habitat', quantity: 1, unitPrice: 22.99, emoji: '🐞', retailers: ['RSPB Shop', 'Amazon', 'Dobbies'], placementZone: 'Habitat Corner', placementNote: 'Mount on a south-facing post at 1.5m. Lacewings and solitary bees will populate within one season.' },
  { id: 'w8', name: 'Bark Chip Path', subtitle: '80L bag · Natural wood chip', category: 'Soil & Ground Finish', quantity: 3, unitPrice: 6.99, emoji: '🍂', retailers: ['B&Q', 'Dobbies'], placementZone: 'Informal Path', placementNote: 'Lay 100mm deep along informal path lines between wildflower and perennial zones. No edging needed.' },
  { id: 'w9', name: 'Peat-free Compost', subtitle: '50L bag', category: 'Soil & Ground Finish', quantity: 2, unitPrice: 9.00, emoji: '🪴', retailers: ['B&Q', 'Dobbies'], placementZone: 'Border Prep', placementNote: 'Fork into border soil before planting. Improves soil biology — essential for pollinator health.' },
  { id: 'w10', name: 'Watering Can 9L', subtitle: 'Long-spout, galvanised steel', category: 'Tools & Care', quantity: 1, unitPrice: 14.99, emoji: '🚿', retailers: ['B&Q', 'Amazon'], placementZone: 'Tool Store', placementNote: 'Used only in establishment year. Once settled, wildlife gardens are self-sustaining with rainfall.' },
];

const wildlifePlaZones: PlacementZone[] = [
  { id: 'wz1', label: 'Boundary Hedge', position: 'Along boundary fence line', purpose: 'Hawthorn hedge replaces hard fencing over time. Provides nesting habitat, autumn berries, and wildlife corridors.', productIds: ['w3'] },
  { id: 'wz2', label: 'Wildflower Meadow Patch', position: 'Sunniest 2×2m area of lawn', purpose: 'Even a small wildflower patch supports 20+ pollinator species. No lawn feeding or intensive management here.', productIds: ['w1'] },
  { id: 'wz3', label: 'Perennial Border', position: 'Sunny border along fence', purpose: 'Long-flowering perennials provide nectar from May–October. Leaving seed heads feeds finches November–February.', productIds: ['w2'] },
  { id: 'wz4', label: 'Central Feature', position: 'Open centre, visible from house', purpose: 'Bird bath sited in open ground gives birds clear sightlines. Ceramic holds water temperature better than plastic.', productIds: ['w4'] },
  { id: 'wz5', label: 'Habitat Corner', position: 'Shaded corner, furthest from house', purpose: 'Log pile, hedgehog house, and bug hotel form a habitat cluster. Disturbance must be minimal — this corner is left intentionally wild.', productIds: ['w5', 'w6', 'w7'] },
  { id: 'wz6', label: 'Informal Path', position: 'Bark chip trail connecting zones', purpose: 'Bark path allows access for maintenance without compacting soil or disturbing habitat. Looks natural, costs little.', productIds: ['w8', 'w9'] },
];

// ─────────────────────────────────────────────────────────────
// MEDITERRANEAN PATIO
// ─────────────────────────────────────────────────────────────
const mediterProducts: Product[] = [
  { id: 'med1', name: 'Sandstone Paving Flags', subtitle: '45×30cm natural sandstone, 6-pack', category: 'Paving & Edging', quantity: 3, unitPrice: 44.99, emoji: '🟫', retailers: ['Marshalls', 'B&Q', 'Wickes'], placementZone: 'Central Patio', placementNote: 'Lay in stretcher bond on sand bed. Buff tone pairs with terracotta. Leave 10mm joints for gravel infill.' },
  { id: 'med2', name: "Rosemary 'Miss Jessopp'", subtitle: '2L pot, upright habit', category: 'Plants', quantity: 3, unitPrice: 6.49, emoji: '🌿', retailers: ['Dobbies', 'RHS Plant Shop'], placementZone: 'Pot Grouping', placementNote: 'Plant in terracotta pots or directly into gravel beds. Thrives in free-draining soil. No winter watering.' },
  { id: 'med3', name: "Lavender 'Vera'", subtitle: '2L pot, French lavender', category: 'Plants', quantity: 4, unitPrice: 5.99, emoji: '💜', retailers: ['Dobbies', 'B&Q', 'Crocus'], placementZone: 'Pot Grouping', placementNote: 'Group 3 pots together at different heights. Trim to 15cm after first flowering to maintain bushy shape.' },
  { id: 'med4', name: 'Olive Tree', subtitle: '12L pot, patio-trained, 80–100cm', category: 'Plants', quantity: 1, unitPrice: 49.99, emoji: '🫒', retailers: ['Dobbies', 'Crocus', 'John Lewis'], placementZone: 'Focal Point', placementNote: 'Position as central or corner focal point. Move into unheated greenhouse Nov–Feb in northern UK regions.' },
  { id: 'med5', name: 'Cistus purpureus', subtitle: 'Rock rose, 2L, drought tolerant', category: 'Plants', quantity: 2, unitPrice: 7.49, emoji: '🌺', retailers: ['Crocus', 'RHS Plant Shop'], placementZone: 'Pot Grouping', placementNote: 'Plant in terracotta pots or gravel beds. Requires no irrigation once established. Flowers May–July.' },
  { id: 'med6', name: 'Terracotta Pot Large', subtitle: '40cm diameter, hand-thrown', category: 'Pots & Planters', quantity: 3, unitPrice: 14.99, emoji: '🏺', retailers: ['B&Q', 'Crocus', 'Amazon'], placementZone: 'Pot Grouping', placementNote: 'Cluster at varying heights — use bricks to raise smaller pots. Odd numbers look more natural than even.' },
  { id: 'med7', name: 'Terracotta Pot Medium', subtitle: '25cm diameter', category: 'Pots & Planters', quantity: 4, unitPrice: 7.99, emoji: '🏺', retailers: ['B&Q', 'Amazon'], placementZone: 'Pot Grouping', placementNote: 'Scatter around main cluster and near seating. Fill with lavender or trailing rosemary.' },
  { id: 'med8', name: 'Golden Buff Gravel', subtitle: '20kg bag, warm tone', category: 'Soil & Ground Finish', quantity: 4, unitPrice: 8.50, emoji: '🟡', retailers: ['B&Q', 'Wickes'], placementZone: 'Ground Finish', placementNote: 'Fill all non-paved areas to 50mm depth over membrane. Warm tone amplifies the Mediterranean effect.' },
  { id: 'med9', name: 'Weed Suppression Membrane', subtitle: '2×10m heavy-duty roll', category: 'Soil & Ground Finish', quantity: 1, unitPrice: 12.99, emoji: '🏗️', retailers: ['B&Q', 'Wickes'], placementZone: 'Ground Finish', placementNote: 'Lay before gravel. Cut planting holes with Stanley knife. Essential for keeping gravel clean.' },
  { id: 'med10', name: 'Mosaic Tile Bistro Set', subtitle: '2-seater, tile-top wrought iron', category: 'Furniture', quantity: 1, unitPrice: 149.00, emoji: '🪑', retailers: ['John Lewis', 'MADE', 'Argos'], placementZone: 'Seating Area', placementNote: 'Centre on paved area. Rotate seasonally to even wear. Wipe tile surface after rain to prevent lime staining.' },
  { id: 'med11', name: 'Solar Terracotta Lanterns', subtitle: 'Set of 3 · warm amber LED', category: 'Lighting', quantity: 1, unitPrice: 29.99, emoji: '🏮', retailers: ['Amazon', 'B&Q', 'John Lewis'], placementZone: 'Ambient Lighting', placementNote: 'Place at ground level between pot clusters and along path edges. Amber tone extends the warm palette.' },
  { id: 'med12', name: 'Outdoor Rug', subtitle: '160×120cm, natural fibres, washable', category: 'Decor & Habitat', quantity: 1, unitPrice: 59.99, emoji: '🪣', retailers: ['IKEA', 'John Lewis', 'Amazon'], placementZone: 'Seating Area', placementNote: 'Lay under bistro set. Anchors the seating zone visually and reduces heat reflection from pale stone.' },
];

const mediterPlaZones: PlacementZone[] = [
  { id: 'medz1', label: 'Central Patio', position: 'Full central area, sandstone paving', purpose: 'Sandstone provides warm, flat entertaining surface. Buff tone is the structural base of the entire colour palette.', productIds: ['med1'] },
  { id: 'medz2', label: 'Focal Point', position: 'Corner or central axis position', purpose: 'Olive tree creates a single strong vertical — gives the space a mature, curated quality even when newly planted.', productIds: ['med4'] },
  { id: 'medz3', label: 'Pot Grouping', position: 'Around patio edges and near seating', purpose: 'Terracotta pots clustered at different heights create the layered, abundant look of a southern European courtyard.', productIds: ['med2', 'med3', 'med5', 'med6', 'med7'] },
  { id: 'medz4', label: 'Ground Finish', position: 'All non-paved zones', purpose: 'Golden buff gravel over weed membrane eliminates weeding entirely while keeping the warm tone of the palette consistent.', productIds: ['med8', 'med9'] },
  { id: 'medz5', label: 'Seating Area', position: 'Centre of paving, facing garden', purpose: 'Bistro set with outdoor rug creates a defined room within the space. Rug grounds the furniture and adds softness.', productIds: ['med10', 'med12'] },
  { id: 'medz6', label: 'Ambient Lighting', position: 'Ground level, between pots and path edge', purpose: 'Solar lanterns at floor level cast upward glow onto pots and planting. Warm amber reinforces the sun-soaked palette.', productIds: ['med11'] },
];

// ─────────────────────────────────────────────────────────────
// LOW-MAINTENANCE MINIMAL
// ─────────────────────────────────────────────────────────────
const lowMaintProducts: Product[] = [
  { id: 'lm1', name: 'Large-Format Porcelain Paving', subtitle: '60×60cm light grey, 6-pack', category: 'Paving & Edging', quantity: 3, unitPrice: 54.99, emoji: '⬜', retailers: ['Marshalls', 'B&Q', 'Wickes'], placementZone: 'Main Paved Area', placementNote: 'Cover entire central zone. Mortar onto properly prepared sub-base. Professional laying strongly recommended.' },
  { id: 'lm2', name: 'Pittosporum tenuifolium', subtitle: 'Evergreen shrub, 3L, 40–60cm', category: 'Plants', quantity: 3, unitPrice: 11.99, emoji: '🌲', retailers: ['Dobbies', 'Crocus', 'B&Q'], placementZone: 'Planting Pockets', placementNote: 'Plant in prepared gravel pockets. Clips into any shape or left natural — one cut per year suffices.' },
  { id: 'lm3', name: 'Sedum Groundcover Mix', subtitle: 'Drought tolerant, spreading, 1L', category: 'Plants', quantity: 4, unitPrice: 4.99, emoji: '🌱', retailers: ['Crocus', 'RHS Plant Shop'], placementZone: 'Planting Pockets', placementNote: 'Plant between structural shrubs. Spreads to fill gaps. Flowers June–September with no care required.' },
  { id: 'lm4', name: 'Silver Decorative Gravel', subtitle: '20kg bag · Grey quartzite', category: 'Soil & Ground Finish', quantity: 5, unitPrice: 8.50, emoji: '🪨', retailers: ['B&Q', 'Wickes'], placementZone: 'Gravel Beds', placementNote: 'Fill all non-paved areas to 50mm. Cools the palette. Top-up every 3–4 years as it settles.' },
  { id: 'lm5', name: 'Weed Suppression Membrane', subtitle: '2×10m heavy-duty roll', category: 'Soil & Ground Finish', quantity: 2, unitPrice: 12.99, emoji: '🏗️', retailers: ['B&Q', 'Wickes'], placementZone: 'Gravel Beds', placementNote: 'Lay under all gravel. This is the single most important step for achieving low maintenance.' },
  { id: 'lm6', name: 'Black Metal Edging Strip', subtitle: '10m roll, 150mm depth', category: 'Paving & Edging', quantity: 2, unitPrice: 27.99, emoji: '🔲', retailers: ['B&Q', 'Amazon', 'Wickes'], placementZone: 'Border Definition', placementNote: 'Install between paving and gravel. The crisp line between materials is the visual logic of this style.' },
  { id: 'lm7', name: 'Concrete Rectangular Planter', subtitle: '60×30cm fibrecrete', category: 'Pots & Planters', quantity: 2, unitPrice: 44.99, emoji: '⬜', retailers: ['MADE', 'John Lewis'], placementZone: 'Entry or Axis Points', placementNote: 'Position in pairs at patio entry or flanking a focal point. Plant with single grass or evergreen.' },
  { id: 'lm8', name: 'Solar LED Path Lights', subtitle: 'Set of 6, stainless flush mount', category: 'Lighting', quantity: 1, unitPrice: 34.99, emoji: '💡', retailers: ['Amazon', 'B&Q'], placementZone: 'Path Edge', placementNote: 'Flush-mount into gravel or grass edge at 1.2m intervals. Low profile — never clutters the clean look.' },
  { id: 'lm9', name: 'Folding Lounge Chair Set', subtitle: '2-piece, powder-coated aluminium', category: 'Furniture', quantity: 1, unitPrice: 129.99, emoji: '🪑', retailers: ['Argos', 'IKEA', 'Amazon'], placementZone: 'Seating Area', placementNote: 'Folds flat for storage in winter. Aluminium does not rust or require oiling. Zero maintenance.' },
];

const lowMaintPlaZones: PlacementZone[] = [
  { id: 'lmz1', label: 'Main Paved Zone', position: 'Entire usable garden area', purpose: 'Porcelain paving is the dominant surface. Covers most of the space, eliminating lawn and its weekly mowing commitment.', productIds: ['lm1'] },
  { id: 'lmz2', label: 'Border Definition', position: 'Between paving and gravel edges', purpose: 'Black edging creates a clean material boundary. Without it, gravel migrates onto paving and erodes the look within one season.', productIds: ['lm6'] },
  { id: 'lmz3', label: 'Gravel Beds', position: 'Narrow perimeter beds around paving', purpose: 'Membrane + gravel eliminates weeding. These beds hold structural plants with near-zero ongoing input.', productIds: ['lm4', 'lm5'] },
  { id: 'lmz4', label: 'Planting Pockets', position: 'Within gravel at regular intervals', purpose: 'Pittosporum and sedum need one clip and one weed-check per year. They form the living element without the maintenance burden.', productIds: ['lm2', 'lm3'] },
  { id: 'lmz5', label: 'Entry or Axis Points', position: 'Flanking patio entrance or view axis', purpose: 'Concrete planters add structured mass without any planting maintenance if filled with artificial or slow-growing specimens.', productIds: ['lm7'] },
  { id: 'lmz6', label: 'Lighting & Seating', position: 'Central paved area and path edges', purpose: 'Solar path lights need no wiring. Aluminium chairs need no treatment. The entire furniture and lighting setup requires zero annual care.', productIds: ['lm8', 'lm9'] },
];

// ─────────────────────────────────────────────────────────────
// NATURALISTIC GARDEN
// ─────────────────────────────────────────────────────────────
const naturalisticProducts: Product[] = [
  { id: 'n1', name: 'Molinia caerulea', subtitle: 'Purple moor grass, 2L', category: 'Plants', quantity: 5, unitPrice: 7.99, emoji: '🌾', retailers: ['Crocus', 'RHS Plant Shop'], placementZone: 'Perennial Border', placementNote: 'Plant in flowing drifts of 3–5. Moves beautifully in wind — site where it is backlit by evening sun.' },
  { id: 'n2', name: "Astrantia 'Roma'", subtitle: 'Masterwort, 1L', category: 'Plants', quantity: 4, unitPrice: 6.49, emoji: '🌸', retailers: ['Crocus', 'Dobbies', 'RHS Plant Shop'], placementZone: 'Perennial Border', placementNote: 'Weave between grasses. Self-seeds gently. Flowers June–August and again if cut back after first flush.' },
  { id: 'n3', name: "Echinacea 'Magnus'", subtitle: 'Coneflower, 2L', category: 'Plants', quantity: 4, unitPrice: 7.99, emoji: '🌺', retailers: ['Crocus', 'Dobbies'], placementZone: 'Perennial Border', placementNote: 'Place mid-border. Leave seed heads standing November–February — architectural and vital for goldfinches.' },
  { id: 'n4', name: 'Native Ferns Pack', subtitle: 'Dryopteris & Polypodium, 1L', category: 'Plants', quantity: 3, unitPrice: 5.99, emoji: '🌿', retailers: ['RHS Plant Shop', 'Crocus'], placementZone: 'Shaded Zone', placementNote: 'Plant in shadier areas of border or under trees. Evergreen — provides year-round green ground layer.' },
  { id: 'n5', name: 'Slate Stepping Stone Discs', subtitle: 'Natural slate, 40cm dia, set of 6', category: 'Paving & Edging', quantity: 1, unitPrice: 39.99, emoji: '🪨', retailers: ['B&Q', 'Dobbies'], placementZone: 'Informal Path', placementNote: 'Set at a natural walking stride (60cm centre to centre). Allow plants to grow over edges intentionally.' },
  { id: 'n6', name: 'Raised Timber Planter', subtitle: '120×60cm, FSC larch, 40cm tall', category: 'Pots & Planters', quantity: 1, unitPrice: 69.99, emoji: '📦', retailers: ['B&Q', 'Wickes', 'Amazon'], placementZone: 'Focal Zone', placementNote: 'Position as garden centrepiece or against boundary. Fill with good compost and plant with herbs or grasses.' },
  { id: 'n7', name: 'Organic Bark Mulch', subtitle: '60L bag, composted', category: 'Soil & Ground Finish', quantity: 3, unitPrice: 7.99, emoji: '🍂', retailers: ['B&Q', 'Dobbies'], placementZone: 'Border Ground', placementNote: 'Spread 70mm deep between all plants. Locks in moisture, suppresses weeds, improves soil biology.' },
  { id: 'n8', name: 'Peat-free Compost', subtitle: '50L bag', category: 'Soil & Ground Finish', quantity: 2, unitPrice: 9.00, emoji: '🪴', retailers: ['B&Q', 'Dobbies'], placementZone: 'Border Ground', placementNote: 'Fork into border before planting. Naturalistic gardens thrive on improved soil, not constant feeding.' },
  { id: 'n9', name: 'Garden Bench — Timber', subtitle: '2-seater, FSC hardwood, 120cm', category: 'Furniture', quantity: 1, unitPrice: 149.00, emoji: '🪑', retailers: ['Dobbies', 'Garden Trading', 'John Lewis'], placementZone: 'Seating Point', placementNote: 'Place at the end of a stepping stone path, facing back toward the planting. Creates a "destination" within the garden.' },
  { id: 'n10', name: 'Trellis Panel', subtitle: '180×60cm diamond, pressure-treated', category: 'Privacy & Structure', quantity: 1, unitPrice: 19.99, emoji: '🪵', retailers: ['B&Q', 'Wickes'], placementZone: 'Boundary', placementNote: 'Fix to boundary fence to add climbing plant support. Train honeysuckle or a native rose for scent.' },
];

const naturalisticPlaZones: PlacementZone[] = [
  { id: 'nz1', label: 'Perennial Border', position: 'Sweeping border around lawn or path edge', purpose: 'Grasses, astrantia, and echinacea planted in flowing drifts rather than rows. The irregular arrangement creates natural rhythm.', productIds: ['n1', 'n2', 'n3'] },
  { id: 'nz2', label: 'Shaded Zone', position: 'North-facing or under-canopy areas', purpose: 'Native ferns fill areas where flowering perennials struggle. Maintains ground cover year-round without input.', productIds: ['n4'] },
  { id: 'nz3', label: 'Informal Path', position: 'Through centre of planting', purpose: 'Slate stepping discs set at walking stride allow access for admiring and tending the planting without trampling.', productIds: ['n5'] },
  { id: 'nz4', label: 'Focal Zone', position: 'Centre or visible axis from house', purpose: 'Raised timber planter adds structure and height variation. Acts as an anchor point within the loose planting composition.', productIds: ['n6'] },
  { id: 'nz5', label: 'Border Ground', position: 'All planting bed surfaces', purpose: 'Bark mulch at 70mm depth reduces watering frequency by 40% and creates the natural woodland floor aesthetic.', productIds: ['n7', 'n8'] },
  { id: 'nz6', label: 'Seating Point', position: 'End of path, tucked within planting', purpose: 'Bench placed within the planting — not outside it — creates immersion. You sit surrounded by plants, not looking at them from a distance.', productIds: ['n9', 'n10'] },
];

// ─────────────────────────────────────────────────────────────
// KOREAN ZEN
// ─────────────────────────────────────────────────────────────
const zenProducts: Product[] = [
  { id: 'z1', name: 'Japanese Maple', subtitle: 'Acer palmatum, 5L, 60–80cm', category: 'Plants', quantity: 1, unitPrice: 44.99, emoji: '🍁', retailers: ['Crocus', 'Dobbies', 'RHS Plant Shop'], placementZone: 'Specimen Zone', placementNote: 'Position off-centre, not centred. Asymmetric placement is fundamental to the Korean garden principle. Never in a pot — plant into prepared ground or large fibrecrete container.' },
  { id: 'z2', name: 'Mondo Grass', subtitle: 'Ophiopogon planiscapus, 1L', category: 'Plants', quantity: 6, unitPrice: 4.99, emoji: '🌿', retailers: ['Crocus', 'RHS Plant Shop'], placementZone: 'Ground Layer', placementNote: 'Plant in loose clusters around the base of specimen trees and at gravel edges. Space 20cm apart. Evergreen.' },
  { id: 'z3', name: 'Moss Groundcover Starter', subtitle: 'Shade-tolerant, flat mat', category: 'Plants', quantity: 3, unitPrice: 8.99, emoji: '🍀', retailers: ['RHS Plant Shop', 'Amazon'], placementZone: 'Ground Layer', placementNote: 'Press onto moist soil in shaded zones. Keep damp through first summer. Spreads naturally thereafter.' },
  { id: 'z4', name: 'White Quartz Gravel', subtitle: '20kg bag, fine-grade 10mm', category: 'Soil & Ground Finish', quantity: 4, unitPrice: 9.99, emoji: '⬪', retailers: ['B&Q', 'Wickes'], placementZone: 'Raked Gravel Field', placementNote: 'Lay 60mm deep over membrane. The raked gravel field is the central meditation element — do not rush this.' },
  { id: 'z5', name: 'Weed Suppression Membrane', subtitle: '2×10m heavy-duty roll', category: 'Soil & Ground Finish', quantity: 1, unitPrice: 12.99, emoji: '🏗️', retailers: ['B&Q', 'Wickes'], placementZone: 'Raked Gravel Field', placementNote: 'Essential. Without membrane, gravel mixes with soil and the raked pattern becomes impossible to maintain.' },
  { id: 'z6', name: 'Natural Slate Stepping Stones', subtitle: '40×40cm, natural cleft, set of 6', category: 'Paving & Edging', quantity: 1, unitPrice: 49.99, emoji: '🪨', retailers: ['B&Q', 'Wickes', 'Marshalls'], placementZone: 'Path Through Gravel', placementNote: 'Set stones at slightly irregular intervals. Path should feel discovered, not engineered. Embed 20mm into gravel.' },
  { id: 'z7', name: 'Stone Lantern', subtitle: 'Reconstituted stone, 45cm, flat cap', category: 'Decor & Habitat', quantity: 1, unitPrice: 59.99, emoji: '🏮', retailers: ['Amazon', 'Dobbies', 'Garden Trading'], placementZone: 'Focal Feature', placementNote: 'Position near the stepping stone path, off to one side. Never centred — balance through asymmetry.' },
  { id: 'z8', name: 'Bamboo Screening Panel', subtitle: '180×90cm natural cane', category: 'Privacy & Structure', quantity: 2, unitPrice: 29.99, emoji: '🎋', retailers: ['B&Q', 'Amazon'], placementZone: 'Boundary', placementNote: 'Attach to fence panels behind gravel field. Natural cane texture provides the only visual variety in the boundary layer.' },
  { id: 'z9', name: 'Low Timber Meditation Bench', subtitle: 'Oiled hardwood, 120×30cm, 35cm tall', category: 'Furniture', quantity: 1, unitPrice: 89.99, emoji: '🪑', retailers: ['Amazon', 'Garden Trading'], placementZone: 'Seating Zone', placementNote: 'Low bench at 35cm height changes posture and pace. Position facing the gravel field, not the boundary. This is the point of stillness.' },
  { id: 'z10', name: 'Solar Ground Lights', subtitle: 'Set of 4 · flush stainless, warm white', category: 'Lighting', quantity: 1, unitPrice: 27.99, emoji: '💡', retailers: ['Amazon', 'B&Q'], placementZone: 'Path Edge', placementNote: 'Set flush into gravel beside stepping stones. Light should graze the ground, not illuminate upward. Subtle is essential.' },
];

const zenPlaZones: PlacementZone[] = [
  { id: 'zz1', label: 'Raked Gravel Field', position: 'Central and largest zone of the space', purpose: 'White quartz gravel is the primary spatial experience. Raking creates linear or wave patterns that define contemplative mood. Membrane prevents weed disruption.', productIds: ['z4', 'z5'] },
  { id: 'zz2', label: 'Specimen Zone', position: 'Off-centre, never in the middle', purpose: 'The Japanese maple is the emotional anchor of the garden. Off-centre placement creates tension and visual interest — centred would feel static and formal.', productIds: ['z1'] },
  { id: 'zz3', label: 'Ground Layer', position: 'At base of specimens and gravel edge', purpose: 'Mondo grass and moss fill the transition between gravel and planting. They blur the material boundary and soften the composition without adding maintenance.', productIds: ['z2', 'z3'] },
  { id: 'zz4', label: 'Path Through Gravel', position: 'Asymmetric route from entry to bench', purpose: 'Stepping stones create a deliberate journey — the act of stepping stone to stone slows movement and directs attention downward, to the gravel texture beneath.', productIds: ['z6'] },
  { id: 'zz5', label: 'Focal Feature', position: 'Beside path, off to one side', purpose: 'Stone lantern provides a single still object in the composition. Its weight and permanence contrast with the lightness of the maple canopy above.', productIds: ['z7'] },
  { id: 'zz6', label: 'Boundary', position: 'Behind gravel field', purpose: 'Bamboo screening creates a neutral vertical plane. Natural texture without colour — the background must not compete with the specimen or gravel for attention.', productIds: ['z8'] },
  { id: 'zz7', label: 'Seating Zone', position: 'End of path, low to ground, facing field', purpose: 'Low bench at 35cm changes posture. Sitting lower to the ground creates a different spatial relationship — the gravel field fills the visual field, not the sky or fence.', productIds: ['z9', 'z10'] },
];

// ─────────────────────────────────────────────────────────────
// FAMILY-FRIENDLY GARDEN
// ─────────────────────────────────────────────────────────────
const familyProducts: Product[] = [
  { id: 'f1', name: 'Hard-Wearing Lawn Seed Mix', subtitle: 'Dwarf rye blend, 500g covers ~20m²', category: 'Soil & Ground Finish', quantity: 2, unitPrice: 9.99, emoji: '🌱', retailers: ['B&Q', 'Dobbies', 'Amazon'], placementZone: 'Central Lawn', placementNote: 'Sow spring or autumn on prepared bare soil. Germinates in 2–3 weeks. Tolerates heavy traffic within 8 weeks.' },
  { id: 'f2', name: 'Composite Decking Board', subtitle: '2.4m board, 14 boards = 4m² deck', category: 'Paving & Edging', quantity: 4, unitPrice: 42.99, emoji: '🟫', retailers: ['B&Q', 'Wickes', 'Toolstation'], placementZone: 'Patio Zone', placementNote: 'Install on timber joists, 40cm spacings. Composite requires no oiling, no sealing, no seasonal treatment.' },
  { id: 'f3', name: 'Deck Framing Joists', subtitle: 'Treated timber 47×100mm, 4.8m', category: 'Paving & Edging', quantity: 6, unitPrice: 14.99, emoji: '🪵', retailers: ['B&Q', 'Wickes'], placementZone: 'Patio Zone', placementNote: 'Lay on compacted hardcore or concrete pads. Level each joist carefully — this determines the final deck quality.' },
  { id: 'f4', name: 'Lavender Border Mix', subtitle: '2L pots, non-toxic, child-safe', category: 'Plants', quantity: 5, unitPrice: 6.99, emoji: '💜', retailers: ['Dobbies', 'B&Q'], placementZone: 'Perimeter Border', placementNote: 'Plant along all border edges bordering lawn. Lavender is non-toxic to children and pets. Trim annually after flowering.' },
  { id: 'f5', name: 'Rosemary Hedge Starts', subtitle: '2L pot, upright cultivar', category: 'Plants', quantity: 3, unitPrice: 6.49, emoji: '🌿', retailers: ['Dobbies', 'RHS Plant Shop'], placementZone: 'Boundary Planting', placementNote: 'Plant along boundary in a loose line. Creates informal screening at adult height within 3–4 years. Edible and fragrant.' },
  { id: 'f6', name: 'Weatherproof Storage Box', subtitle: '280L, lockable, UV-resistant', category: 'Decor & Habitat', quantity: 1, unitPrice: 79.99, emoji: '📦', retailers: ['Argos', 'Amazon', 'B&Q'], placementZone: 'Storage Zone', placementNote: 'Position against boundary wall or fence, accessible from deck. Stores garden furniture cushions and children\'s toys.' },
  { id: 'f7', name: 'Patio Dining Set', subtitle: '6-seater, FSC acacia, foldable chairs', category: 'Furniture', quantity: 1, unitPrice: 349.00, emoji: '🍽️', retailers: ['John Lewis', 'MADE', 'Dobbies'], placementZone: 'Patio Zone', placementNote: 'Centre on decked area. Allow 1m clearance all sides for chairs to push back. Position near door for ease of use.' },
  { id: 'f8', name: 'Market Umbrella', subtitle: '3m cantilever, UV50+ fabric', category: 'Furniture', quantity: 1, unitPrice: 119.00, emoji: '⛱️', retailers: ['John Lewis', 'Argos', 'Amazon'], placementZone: 'Patio Zone', placementNote: 'Cantilever base at edge of patio — keeps central table space clear. Essential for UK summer meals.' },
  { id: 'f9', name: 'Festoon Lights', subtitle: '10m warm white LED, IP44 outdoor', category: 'Lighting', quantity: 2, unitPrice: 24.99, emoji: '💡', retailers: ['Amazon', 'B&Q', 'IKEA'], placementZone: 'Overhead Zone', placementNote: 'String at 2.2m between posts or fence fixings. Two 10m runs cover a standard 4m wide deck. Creates evening usability.' },
  { id: 'f10', name: 'Timber Trellis Panel', subtitle: '180×60cm, pressure-treated pine', category: 'Privacy & Structure', quantity: 3, unitPrice: 19.99, emoji: '🪵', retailers: ['B&Q', 'Wickes'], placementZone: 'Boundary Screening', placementNote: 'Add above existing 1.8m fence to reach 2.4m total. Increases privacy from neighbours overlooking the garden.' },
  { id: 'f11', name: 'Peat-free Compost', subtitle: '50L bag', category: 'Soil & Ground Finish', quantity: 2, unitPrice: 9.00, emoji: '🪴', retailers: ['B&Q', 'Dobbies'], placementZone: 'Perimeter Border', placementNote: 'Fork into border soil before planting. Well-fed borders grow faster and require less top-up weeding.' },
];

const familyPlaZones: PlacementZone[] = [
  { id: 'fz1', label: 'Central Lawn', position: 'Largest single zone, entire central area', purpose: 'Hard-wearing rye lawn provides the safe, flexible surface for children\'s play. It absorbs impact, drains quickly, and recovers from wear if fed twice yearly.', productIds: ['f1'] },
  { id: 'fz2', label: 'Patio Zone', position: 'Adjacent to house, decked area', purpose: 'Composite decking connects house to garden. No splinters, no rot, no annual oiling. Dining set and umbrella create a functional outdoor dining room.', productIds: ['f2', 'f3', 'f7', 'f8'] },
  { id: 'fz3', label: 'Overhead Zone', position: 'Above patio, strung between posts', purpose: 'Festoon lights extend deck usability into evenings and across seasons. Warm white light creates a comfortable socialising atmosphere without harsh glare.', productIds: ['f9'] },
  { id: 'fz4', label: 'Perimeter Border', position: 'Around lawn perimeter, 50–80cm deep', purpose: 'Lavender borders define the lawn edge, are child and pet safe, and need only one annual clip. They separate lawn from hard boundary without aggressive growth.', productIds: ['f4', 'f11'] },
  { id: 'fz5', label: 'Boundary Screening', position: 'Top of existing fence panels', purpose: 'Trellis extensions add 60cm of privacy height above standard 1.8m fencing — the threshold at which most overlooking neighbours lose sightlines.', productIds: ['f5', 'f10'] },
  { id: 'fz6', label: 'Storage Zone', position: 'Against boundary wall, accessible from deck', purpose: 'Weatherproof storage box eliminates clutter on deck. When cushions, toys, and tools are stored, the entire garden looks 50% tidier immediately.', productIds: ['f6'] },
];

// ─────────────────────────────────────────────────────────────
// STYLE CONFIG EXPORT
// ─────────────────────────────────────────────────────────────
export const styleConfigs: StyleConfig[] = [
  {
    id: 'cottage',
    name: 'Cottage Garden',
    title: 'Relaxed Cottage Garden',
    concept: 'Layered perennial planting in informal borders, with natural materials and a central seating destination.',
    layoutLogic: 'Curved borders around a central lawn or stone-paved seating zone. Informal stone path from gate to seating.',
    plantingStrategy: 'Lavender, hydrangeas, foxgloves, and hardy geraniums in a three-layer scheme: tall-back, mid, and front-edge.',
    materialPalette: 'Sandstone path, rustic timber edging, bark mulch, terracotta bistro set, trellis panels.',
    pathType: 'Informal sandstone or reclaimed brick flags',
    focalElement: 'Bistro seating area with overhead festoon lights',
    planImage: '/styles/cottage/plan-2d.png',
    isoImage: '/styles/cottage/preview-isometric.png',
    products: cottageProducts,
    placementZones: cottagePlaZones,
    installationDifficulty: 'Moderate',
    maintenanceDifficulty: 'High',
    spatialExperience: 'Soft enclosure — planting surrounds you on all sides from the seating area',
    designRationale: {
      productFit: 'Lavender and hardy geraniums are selected because they are RHS-hardy to H5, tolerate the variable moisture of UK summers, and require no specialist soil preparation. Hydrangeas and foxgloves provide the height variation essential for the layered cottage aesthetic. Natural stone flags and bark mulch complete the material palette without introducing synthetic materials that would conflict with the style.',
      spatialArrangement: 'Tall foxgloves at the border rear create visual enclosure. Mid-border hydrangeas provide mass. Front-edge lavender and geraniums spill toward the path — softening its edge and creating the perception that the planting is abundant and self-directed. The bistro seat at the centre of this arrangement means the occupant is surrounded by planting on three sides.',
      maintenanceExplanation: 'Maintenance is rated High because cottage gardens require deadheading throughout summer, annual pruning of hydrangeas and roses, dividing of perennials every 2–3 years, and regular bark mulch top-up. The reward is continuous colour from May through October, but the input is genuine. Bark mulch reduces weeding to once per season rather than weekly.',
      installationExplanation: 'Installation is Moderate because laying stone flags correctly requires a prepared sand bed and level checking. Planting in layers requires understanding of mature plant heights and spacing. The trellis fixing requires post hardware and wall plugs. A competent DIYer can complete this over two weekends — no specialist equipment needed.',
      spatialExperience: 'The experience of a well-planted cottage garden is soft enclosure. From the seating area, borders wrap around you on all sides. Planting is dense enough to create a sense of being within the garden rather than looking at it. Festoon lights overhead at 2.2m complete this enclosure in the evening, reducing the perceived size of the sky and making the space feel more intimate.',
    },
    aiInsight: 'The three-layer planting scheme (tall/mid/front-edge) is the structural logic of the cottage garden. Without height variation, borders look flat. Foxgloves at the rear create the upward movement that makes the entire composition feel lush rather than low and sparse.',
    summary: 'A productive planting-led garden with natural materials, three-layer borders, and a sheltered seating destination.',
  },

  {
    id: 'modern-courtyard',
    name: 'Modern Courtyard',
    title: 'Contemporary Modern Courtyard',
    concept: 'Geometric paving, restrained planting pockets, and architectural materials in a defined, low-maintenance outdoor room.',
    layoutLogic: 'Full central paving with perimeter gravel beds. Black metal edging defines every material boundary. Planting in pockets, not borders.',
    plantingStrategy: 'Boxwood balls for geometric mass. Blue fescue grass for textural contrast. Repetition over variety.',
    materialPalette: 'Large-format grey porcelain, silver quartzite gravel, black steel edging, bamboo screening, concrete planters.',
    pathType: 'Continuous large-format porcelain flags',
    focalElement: 'Outdoor lounge set against bamboo screening wall',
    planImage: '/styles/modern-courtyard/plan-2d.png',
    isoImage: '/styles/modern-courtyard/preview-isometric.png',
    products: modernProducts,
    placementZones: modernPlaZones,
    installationDifficulty: 'Difficult',
    maintenanceDifficulty: 'Low',
    spatialExperience: 'Contained clarity — defined geometry creates a sense of order and quiet',
    designRationale: {
      productFit: 'Porcelain paving is selected over natural stone because its consistent large format is what creates the flat, uninterrupted visual plane that defines the modern courtyard. Boxwood is chosen for geometric clipping reliability — it clips cleanly and holds its shape for 4–6 months between cuts. Blue fescue is drought-tolerant and needs no feeding or dividing once established. Silver gravel ties to the grey porcelain palette without competing.',
      spatialArrangement: 'The entire central zone is paved, creating a single continuous surface that maximises usable flat area. Planting is deliberately pushed to the perimeter in narrow gravel pockets — this keeps the centre clear for furniture and circulation. Black edging provides the material boundary that gives the design its structural clarity. Without it, gravel and paving merge and the geometric logic collapses.',
      maintenanceExplanation: 'Maintenance is rated Low because: porcelain paving requires only an annual pressure wash; boxwood needs clipping twice per year (April and September); gravel needs a light rake once per season; weed membrane eliminates weeding. The total annual maintenance commitment is approximately 4–6 hours, compared to 40+ hours for a planted cottage garden of the same size.',
      installationExplanation: 'Installation is rated Difficult because large-format porcelain paving requires a correctly prepared sub-base and mortar bed. Uneven laying of 60×60cm slabs is visible and cannot be hidden. This is the one element that should be professionally installed. The screening, edging, planting, and gravel can all be completed DIY in two weekends after the paving is done.',
      spatialExperience: 'The modern courtyard creates spatial calm through reduction rather than addition. Consistent materials, minimal plant variety, and defined geometry eliminate visual noise. The eye has nowhere to be distracted — it settles on the space itself. The lounge set against the bamboo screening creates a sense of backing into the space, with the open paving in front. This positioning creates a mild sense of enclosure at the back and openness toward the front.',
    },
    aiInsight: 'The single most important material decision in this style is the black metal edging. It costs under £60 and transforms the look from amateur gravel and paving to a coherent design. Every modern garden that looks professional has clean material separation. Every one that does not, does not.',
    summary: 'A geometry-led outdoor room. Maximum usable paving, minimum plant maintenance, maximum visual order.',
  },

  {
    id: 'wildlife',
    name: 'Wildlife Garden',
    title: 'Biodiverse Wildlife Garden',
    concept: 'A nature-led space designed around pollinator and habitat needs, with wildflower areas, native planting, and habitat structures.',
    layoutLogic: 'Perimeter habitat hedge, open wildflower zone in sun, flowing perennial border, habitat corner in shade. Bark path connects zones.',
    plantingStrategy: 'Native wildflowers for spring-summer colour. Long-flowering perennials for nectar. Hawthorn hedge for structure and winter berries.',
    materialPalette: 'Bark chip paths, reclaimed timber, natural stone stepping discs, ceramic bird bath. No hard paving.',
    pathType: 'Bark chip informal path through planting',
    focalElement: 'Bird bath in open centre with wildflower patch beyond',
    planImage: '/styles/wildlife/plan-2d.png',
    isoImage: '/styles/wildlife/preview-isometric.png',
    products: wildlifeProducts,
    placementZones: wildlifePlaZones,
    installationDifficulty: 'Easy',
    maintenanceDifficulty: 'Low',
    spatialExperience: 'Open naturalism — the garden feels visited and inhabited, not designed',
    designRationale: {
      productFit: 'Native and near-native plants are chosen because they have co-evolved with UK insects — their flower timing, shape, and nectar chemistry match the needs of native pollinators. Echinacea and rudbeckia are non-native but are RHS Plants for Pollinators — their accessible flower heads serve bumblebees effectively. The habitat structures (log pile, hedgehog house, bug hotel) provide the shelter and overwintering sites that make the garden ecologically functional, not just visually planted.',
      spatialArrangement: 'The wildflower patch occupies the sunniest zone because wildflowers require high light for germination and flowering. The habitat corner is deliberately placed in shade and away from the house — this low-disturbance location is what makes it usable to hedgehogs and stag beetles. The bird bath is sited in open ground with clear sightlines — birds instinctively avoid bathing in covered spots where they cannot see approaching threats. The bark path connects all zones without introducing hard materials that would fragment the soft naturalistic character.',
      maintenanceExplanation: 'Maintenance is rated Low after the establishment year. Once the hawthorn hedge is growing and the perennials are established, the garden requires a single annual cut of the wildflower area in early autumn, one bird bath clean per week, and occasional path top-up. No watering, no feeding, no deadheading. The design intention is deliberate non-intervention — leaving seed heads and dying stems provides habitat.',
      installationExplanation: 'Installation is rated Easy because this garden avoids hard landscaping entirely. There is no paving, no concrete, no mortar. Planting requires only a spade and good soil preparation. The wildflower area requires a single scarification pass with a garden rake. The habitat structures are pre-built and need only positioning. The entire garden can be installed in one weekend by a single person.',
      spatialExperience: 'The spatial quality of a wildlife garden is openness within naturalism. It does not feel empty — the planting is abundant — but it feels unstructured, which creates a psychological quality of expansion and ease. There are no hard edges telling you where to be. The path invites you in rather than directing you. The garden feels inhabited by things other than people — which is the point.',
    },
    aiInsight: 'The single most impactful action in a wildlife garden is leaving a 1m² patch of lawn uncut from April through September. More pollinators will visit that patch of long grass than any planted border. Every product here adds to that foundation — but the foundation is restraint, not addition.',
    summary: 'A habitat-led garden. Low installation effort, minimal ongoing care, high ecological value.',
  },

  {
    id: 'mediterranean',
    name: 'Mediterranean Patio',
    title: 'Sun-Soaked Mediterranean Patio',
    concept: 'Sandstone paving, clustered terracotta pots, drought-tolerant fragrant planting, and warm-toned gravel for a sun-soaked patio.',
    layoutLogic: 'Central sandstone paved area. Terracotta pot groupings at edges and corners. Buff gravel borders over weed membrane. Bistro seating on paving with lanterns.',
    plantingStrategy: 'Lavender, rosemary, cistus, and olive. All drought-tolerant. No irrigation needed after year one. Scent-led planting.',
    materialPalette: 'Sandstone flags, buff golden gravel, hand-thrown terracotta pots, mosaic bistro set, solar terracotta lanterns.',
    pathType: 'Sandstone or limestone flags, 10mm joints',
    focalElement: 'Olive tree as central focal specimen, surrounded by terracotta pot cluster',
    planImage: '/styles/mediterranean/plan-2d.png',
    isoImage: '/styles/mediterranean/preview-isometric.png',
    products: mediterProducts,
    placementZones: mediterPlaZones,
    installationDifficulty: 'Moderate',
    maintenanceDifficulty: 'Low',
    spatialExperience: 'Warm and open — pale stone and golden gravel amplify available light',
    designRationale: {
      productFit: 'All plants in this kit are drought-tolerant once established, which matches the free-draining, lower-moisture conditions of UK south-facing gardens. Rosemary and lavender require excellent drainage — the gravel-over-membrane system provides this. The olive tree is the one plant that needs winter protection north of the Midlands — moved into an unheated greenhouse or wrapped in fleece November through February. Buff gravel is selected (not silver) because it absorbs and reflects warmth rather than cool light.',
      spatialArrangement: 'The sandstone paving forms the flat social surface. Terracotta pots are clustered, not evenly distributed — odd-number clusters (three, five) at varying heights create natural-looking abundance rather than municipal regularity. The olive tree provides the single upright vertical that anchors the composition. The bistro set with outdoor rug defines the seating zone within the paving — the rug creates a room-within-a-room effect that makes even a small patio feel purposefully arranged.',
      maintenanceExplanation: 'Maintenance is rated Low because all plants chosen are adapted to low-input conditions. Rosemary and lavender need one annual trim after flowering. Gravel over membrane needs no weeding — just an annual rake to redistribute stones that move. The sandstone paving should be sealed every 2–3 years to prevent algae in wet months. Total annual maintenance: approximately 3–5 hours.',
      installationExplanation: 'Installation is rated Moderate because sandstone flag laying requires a level sand bed and consistent joint spacing. It is achievable for a competent DIYer with patience. The gravel and planting are straightforward. Pot grouping requires no digging. The most common installation error is inadequate sub-base preparation — flags that sink after one winter indicate compacted but unconsolidated ground beneath.',
      spatialExperience: 'Pale sandstone and golden buff gravel amplify available light in a way that grey materials do not. On a UK summer day, this palette creates a noticeably warmer micro-environment — stone absorbs heat and releases it slowly through the evening. The combination of warm materials, fragrant planting (lavender, rosemary), and low furniture creates a relaxed outdoor room that rewards sitting still, not moving through.',
    },
    aiInsight: 'Grouping terracotta pots together creates a shared microclimate: the pots shade each other\'s roots and reduce moisture loss through evaporation. A cluster of 5 pots needs watering 30% less frequently than 5 pots spread across the same space. The clustering is not just aesthetic — it is horticultural logic.',
    summary: 'A low-input warm patio. Scent-led planting, terracotta clusters, sandstone paving. No irrigation after year one.',
  },

  {
    id: 'low-maintenance',
    name: 'Low-Maintenance Minimal',
    title: 'Low-Maintenance Minimal Garden',
    concept: 'Maximum paved area, minimum plant input. Evergreen structural shrubs in gravel pockets. Zero lawn, near-zero weeding.',
    layoutLogic: 'Porcelain paving covers the majority of the space. Narrow gravel beds with membrane hold structural evergreens. Black edging defines all material boundaries.',
    plantingStrategy: 'Pittosporum and sedum only. One clip per year for Pittosporum. Sedum spreads and requires nothing.',
    materialPalette: 'Large-format grey porcelain, silver gravel, heavy-duty weed membrane, black steel edging, concrete planters.',
    pathType: 'Continuous porcelain paving',
    focalElement: 'Clean flat paving area with paired concrete planters at entry',
    planImage: '/styles/low-maintenance/plan-2d.png',
    isoImage: '/styles/low-maintenance/preview-isometric.png',
    products: lowMaintProducts,
    placementZones: lowMaintPlaZones,
    installationDifficulty: 'Difficult',
    maintenanceDifficulty: 'Low',
    spatialExperience: 'Calm openness — uncluttered surface creates a sense of space larger than the garden\'s actual footprint',
    designRationale: {
      productFit: 'Pittosporum tenuifolium is selected because it is genuinely low-maintenance: it grows slowly, tolerates clipping into any shape or none, and is evergreen. Sedum groundcover is chosen because it spreads without spreading aggressively, flowers without deadheading, and survives drought without irrigation. Both plants have been selected specifically to avoid the most common low-maintenance garden mistake — choosing plants that become unmanageable within three years.',
      spatialArrangement: 'Porcelain paving dominates the space because flat, clear ground is the most usable ground. The narrow gravel beds push planting to the perimeter, keeping the entire central zone available for furniture, children, gatherings, or simply doing nothing. Concrete planters at the entry points create a sense of arrival and mark the transition from path to garden without requiring any structural change to the space.',
      maintenanceExplanation: 'Maintenance is rated Low with specificity: paving requires an annual pressure wash (1–2 hours); Pittosporum needs one clip in April (30 minutes per shrub); gravel needs a rake to redistribute stones once per season (30 minutes); no watering after establishment. This is approximately 4 hours of garden maintenance per year for a standard-sized back garden. The weed membrane is the critical component — without it, gravel becomes a weed habitat within two seasons.',
      installationExplanation: 'Installation is rated Difficult because large-format porcelain requires professional laying. The sub-base must be compacted to prevent movement and cracking. Porcelain also requires diamond blade cutting for border shapes — this is not DIY territory. However, once the paving is professionally installed, all remaining elements (edging, membrane, gravel, planting, planters) are straightforward DIY tasks achievable in one weekend.',
      spatialExperience: 'An uncluttered flat surface reads as larger than the same space filled with furniture and planting. This is a well-documented spatial effect — the visual limit of a surface is its far edge, not its contents. By reducing visual interruption, the garden appears to extend further. The style creates calm through order: when every material boundary is clean and consistent, the eye rests rather than searches.',
    },
    aiInsight: 'The heavy-duty weed membrane is the single most important component in this kit. It costs £13 and saves approximately 40 hours of weeding per year. A thinner membrane (standard grade) fails within 3 seasons under gravel. Specify 100gsm minimum — the price difference is negligible, the performance difference is significant.',
    summary: 'A maintenance-minimised garden. Paving-dominant, gravel-edged, evergreen-planted. ~4 hours annual care.',
  },

  {
    id: 'naturalistic',
    name: 'Naturalistic Garden',
    title: 'Naturalistic Perennial Garden',
    concept: 'Flowing drifts of ornamental grasses and perennials with seasonal movement, structured by a timber planter and slate stepping stone path.',
    layoutLogic: 'Sweeping perennial borders with a central lawn or gravel path. Slate stepping discs create a route through planting. Timber planter as garden centrepiece.',
    plantingStrategy: 'Ornamental grasses for movement, astrantia for seasonal succession, echinacea for seed-head interest. All four seasons visible.',
    materialPalette: 'Natural slate stepping discs, organic bark mulch, FSC larch raised planter, timber bench, honeysuckle on trellis.',
    pathType: 'Natural slate stepping discs through planting at 60cm stride',
    focalElement: 'Raised timber planter with bench beyond it at path terminus',
    planImage: '/styles/naturalistic/plan-2d.png',
    isoImage: '/styles/naturalistic/preview-isometric.png',
    products: naturalisticProducts,
    placementZones: naturalisticPlaZones,
    installationDifficulty: 'Easy',
    maintenanceDifficulty: 'Low',
    spatialExperience: 'Immersive softness — planting surrounds the path and creates the feeling of moving through the garden rather than along its edge',
    designRationale: {
      productFit: 'Molinia caerulea is selected for its exceptional movement in wind — the translucent seed heads catch low autumn light and provide visual interest from August through January when left standing. Astrantia self-seeds gently and flowers twice if cut back after the first flush, extending the flowering season without additional planting. Echinacea provides the most valuable late-season nectar for bumblebees in August–September. Bark mulch is preferred over gravel in this style because it biodegrades into the soil, improving structure and supporting the naturalistic soil ecosystem.',
      spatialArrangement: 'Borders are designed as sweeping curves rather than straight lines, following the New Perennial planting movement developed by Piet Oudolf. Plants are arranged in informal drifts — repeated clumps of the same species at irregular intervals — rather than single specimens. This creates rhythm without uniformity. The stepping stone path runs through the planting, not alongside it, which changes the visitor\'s relationship to the plants from observer to participant.',
      maintenanceExplanation: 'Maintenance is rated Low because the design works with plant behaviour rather than against it. Seed heads are left standing through winter — this is intentional, not neglectful. The annual cut-back happens in late February before new growth. Bark mulch suppresses weeds and improves soil as it breaks down. The main annual tasks are: February cut-back (1 day), bark mulch top-up every 2 years, and dividing overgrown clumps every 3–4 years.',
      installationExplanation: 'Installation is rated Easy because there is no hard landscaping. Slate stepping stones are set into prepared ground without mortar — they rest on a layer of sharp sand and can be adjusted. Planting in drifts requires spacing knowledge but no specialist tools. The raised timber planter arrives flat-packed and assembles without power tools. The entire garden can be planted by a single person in two days.',
      spatialExperience: 'Moving through planting on stepping stones creates a fundamentally different spatial experience to walking along a path edged by planting. The body is within the space rather than moving past it. Grass seed heads at shoulder height, flowers at mid-height, and moss at ground level create a fully inhabited vertical range. The bench at the end of the path makes the journey purposeful — there is a destination, which makes the movement between planting feel intentional rather than simply utilitarian.',
    },
    aiInsight: 'The most common mistake in naturalistic planting is using too many species. A bed of 15 different plants in ones and twos looks like a collection, not a composition. Use 4–6 species in repeated drifts of 3–5 plants each. Repetition creates rhythm; variety undermines it.',
    summary: 'A movement-led perennial garden. Seasonal interest from March to February. Minimal care, maximum sensory depth.',
  },

  {
    id: 'korean-zen',
    name: 'Korean Zen',
    title: 'Korean Zen Garden',
    concept: 'A contemplative garden of raked gravel, asymmetric specimen planting, and restrained evergreen structure guided by Korean garden principles of balance through imbalance.',
    layoutLogic: 'Raked white quartz gravel field as primary zone. Japanese maple off-centre. Slate stepping stones through gravel. Stone lantern beside path. Low bench at terminus. Bamboo boundary backdrop.',
    plantingStrategy: 'Single Japanese maple specimen. Mondo grass at transitions. Moss in shade. No flowering plants — restraint is the design language.',
    materialPalette: 'White quartz gravel, natural slate stepping stones, reconstituted stone lantern, bamboo screening, oiled hardwood bench.',
    pathType: 'Asymmetric slate stepping stone route through raked gravel',
    focalElement: 'Raked gravel field with off-centre Japanese maple and stone lantern',
    planImage: '/styles/korean-zen/plan-2d.png',
    isoImage: '/styles/korean-zen/preview-isometric.png',
    products: zenProducts,
    placementZones: zenPlaZones,
    installationDifficulty: 'Moderate',
    maintenanceDifficulty: 'Low',
    spatialExperience: 'Still attention — the garden creates conditions for slowing down, not moving through',
    designRationale: {
      productFit: 'White quartz gravel is selected over grey or buff because the whiteness creates maximum contrast with the dark red-green tones of the Japanese maple. This contrast is the visual engine of the composition. Mondo grass is chosen because it is genuinely evergreen (including in winter), very slow-spreading, and requires no cutting. Slate stepping stones are chosen for their irregular cleft surface — each stone has a unique texture, which encourages the eye to rest on individual elements rather than scanning the space.',
      spatialArrangement: 'The Japanese maple is positioned off-centre. This is not an aesthetic preference — it is a structural principle of Korean garden design. A centred specimen creates symmetrical balance that the eye resolves immediately and moves on from. An off-centre specimen creates asymmetrical balance that the eye must work to resolve, and in doing so, lingers in the space. The stepping stone path leads to the bench, making the gravel field the thing you walk beside rather than across — which preserves its raked surface and keeps it intact as a meditative element.',
      maintenanceExplanation: 'Maintenance is rated Low because the garden\'s materials require minimal input. White gravel needs monthly raking (15 minutes) to maintain the pattern — this is not a burden but the practice itself. The maple needs no pruning unless dead wood appears. Mondo grass and moss need no cutting, no feeding. The bamboo screening may need one tie replacement per year. Annual maintenance totals approximately 6–8 hours, most of which is the raking that defines the garden\'s purpose.',
      installationExplanation: 'Installation is rated Moderate because the gravel field requires correctly laid and pinned weed membrane — any gaps will produce weeds that destroy the raked surface. The Japanese maple must be planted in well-prepared soil with good drainage. Stepping stones must be individually levelled in a sand bed. These are careful rather than technically difficult tasks. The overall aesthetic depends on precision of placement — taking more time with positioning is more valuable than speed.',
      spatialExperience: 'The Korean Zen garden creates conditions for stillness rather than activity. The raked gravel field occupies most of the visual field, which removes the clutter and decision-making that typically fills outdoor spaces. The low bench positions the body closer to the ground level of the garden, which reduces the sensation of overlooking and increases the sense of being within the space. The single Japanese maple, when backlit by morning or evening light, provides enough visual interest to hold attention without requiring the eye to move.',
    },
    aiInsight: 'The most important rule of this garden: do not add more. Every addition to a Zen garden is a subtraction from its effect. When tempted to add another plant, another ornament, or another material — resist. The negative space of the gravel field is doing the hardest work in the design. Filling it destroys what makes it work.',
    summary: 'A restraint-led contemplative garden. One specimen, one gravel field, one path, one bench. Nothing more.',
  },

  {
    id: 'family-friendly',
    name: 'Family-Friendly Garden',
    title: 'Family-Friendly Garden',
    concept: 'A hardworking garden with a usable lawn, composite deck dining zone, safe planting borders, and concealed storage.',
    layoutLogic: 'Central hard-wearing lawn for play. Composite deck adjacent to house for dining. Perimeter lavender borders. Trellis screening at top of fence. Storage box against boundary.',
    plantingStrategy: 'Non-toxic lavender borders and rosemary hedge starts only. Safe for children and pets. One annual trim required.',
    materialPalette: 'Composite decking, hard-wearing lawn seed, lavender borders, weatherproof storage, FSC dining set with cantilever umbrella.',
    pathType: 'Lawn and deck surface — no additional paving',
    focalElement: 'Deck dining area with cantilever umbrella and festoon lights overhead',
    planImage: '/styles/family-friendly/plan-2d.png',
    isoImage: '/styles/family-friendly/preview-isometric.png',
    products: familyProducts,
    placementZones: familyPlaZones,
    installationDifficulty: 'Moderate',
    maintenanceDifficulty: 'Moderate',
    spatialExperience: 'Open and useful — the garden is for being in, not looking at',
    designRationale: {
      productFit: 'Composite decking is selected over timber because it requires no annual oiling, does not splinter, does not rot, and maintains its surface texture when wet (unlike smooth timber which becomes slippery). The hard-wearing rye lawn seed mix is selected for its deep root structure and recovery speed — a lawn is the safest impact-absorbing surface for children under 12 and the most flexible use surface in the garden. Lavender is selected as the border plant because it is non-toxic to children and dogs (unlike many common garden plants), thrives with minimal input, and acts as a natural boundary between lawn and fence that does not require structural edging.',
      spatialArrangement: 'The deck is positioned adjacent to the house door — this is the most important placement decision in the family garden. Every additional metre of distance between the kitchen and the dining area reduces its frequency of use. The lawn occupies the centre entirely, leaving it free from obstacles. This open central zone is multi-use: children\'s play, garden games, overflow seating, future lawn games, or simply a generous empty space. The storage box is at the far boundary — accessible but not visible from the main seating position.',
      maintenanceExplanation: 'Maintenance is rated Moderate: the lawn requires mowing every 7–10 days from April through October (the largest single time commitment in this garden), feeding twice per year, and overseeding thin patches annually. Decking requires hosing and an annual scrub to prevent algae. Lavender needs one clip after flowering (July). Total annual maintenance is approximately 30–40 hours, the majority of which is mowing — if this is unacceptable, artificial turf eliminates it entirely but increases installation cost.',
      installationExplanation: 'Installation is rated Moderate because composite decking requires a correctly levelled timber joist frame, which requires accurate measuring and some power tool use (drill, circular saw for board trimming). The joists must be set on concrete pads or post spikes — not directly on soil. An experienced DIYer can complete the deck in a weekend. The lawn preparation, border planting, and storage box positioning are all straightforward one-day tasks.',
      spatialExperience: 'The family garden is optimised for use, not contemplation. The open lawn creates what landscape architects call \'affordance\' — the perception of what a space allows you to do. An open flat lawn affords running, playing, sitting, throwing, and gathering. The festoon lights overhead the deck shift the space from daytime dining to evening socialising — one material change that extends daily usability by 4–6 hours in summer.',
    },
    aiInsight: 'The outdoor storage box solves 80% of family garden clutter in one purchase. Children\'s toys, furniture cushions, garden tools, and sports equipment all share one weatherproof location. When the garden is clear of clutter, families use it more frequently — which means the investment in the deck and lawn is actually used rather than looked at through a window.',
    summary: 'A use-first family garden. Hard-wearing lawn, composite deck dining, non-toxic borders, concealed storage.',
  },
];

export function getStyleById(id: string): StyleConfig {
  return styleConfigs.find((s) => s.id === id) ?? styleConfigs[0];
}
