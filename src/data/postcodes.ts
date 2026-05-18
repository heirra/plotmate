import type { PostcodeInfo } from '../types';

const postcodeMap: Record<string, PostcodeInfo> = {
  SW1A: {
    region: 'South England · Urban London garden',
    climate: 'Mild urban microclimate with reduced frost risk',
    plantSuitability:
      'Chosen for UK climate (RHS hardy), low risk and seasonal interest. Urban heat island extends the growing season.',
  },
  BN1: {
    region: 'South England · Mild coastal garden',
    climate: 'Mild coastal climate with salt-tolerant requirements',
    plantSuitability:
      'Coastal-resilient species selected. Mediterranean and tender plants thrive here with shelter from sea winds.',
  },
  M1: {
    region: 'North England · Urban garden',
    climate: 'Cooler urban climate with moderate rainfall',
    plantSuitability:
      'Hardy perennials and native species prioritised. Plants rated RHS H5–H7 for reliable performance.',
  },
  EH1: {
    region: 'Scotland · Cooler climate garden',
    climate: 'Cool temperate with higher rainfall and wind exposure',
    plantSuitability:
      'Fully hardy natives and robust cultivars only. Shelter and windbreaks recommended to extend plant choices.',
  },
  CF10: {
    region: 'Wales · Mild and wet garden',
    climate: 'Mild and wet Atlantic climate',
    plantSuitability:
      'Moisture-tolerant plants excel here. Ferns, astilbes, and lush planting borders suit the climate well.',
  },
  BT1: {
    region: 'Northern Ireland · Mild and wet garden',
    climate: 'Mild oceanic climate with consistent rainfall',
    plantSuitability:
      'Lush, moisture-loving planting performs well. Long growing season supports cottage and wildlife garden styles.',
  },
};

export function getPostcodeInfo(postcode: string): PostcodeInfo {
  const key = postcode.trim().toUpperCase().replace(/\s+/g, '').slice(0, 4);
  // Try exact prefix match
  for (const [prefix, info] of Object.entries(postcodeMap)) {
    if (key.startsWith(prefix)) return info;
  }
  return {
    region: 'UK region estimate unavailable',
    climate: 'General UK temperate climate assumed',
    plantSuitability:
      'Plants chosen for general UK hardiness. Enter a full postcode for region-specific recommendations.',
  };
}
