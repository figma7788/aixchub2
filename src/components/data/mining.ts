// Mock Data for Price Chart (C10 Index) - 10 Second Intervals
export const miningPriceData = [
  { time: '00:10', price: 43912 },
  { time: '00:20', price: 43915 },
  { time: '00:30', price: 43910 },
  { time: '00:40', price: 43918 },
  { time: '00:50', price: 43922 },
  { time: '01:00', price: 43919 },
  { time: '01:10', price: 43925 },
  { time: '01:20', price: 43928 },
  { time: '01:30', price: 43924 },
  { time: '01:40', price: 43930 },
  { time: '01:50', price: 43935 },
  { time: '02:00', price: 43932 },
  { time: 'Now', price: 43940 },
];

export const miningRecentTrades = [
  { id: 1, user: '0x3a...9f2', side: 'Long', amount: '0.05 BTC', time: '2 mins ago', outcome: 'Pending' },
  { id: 2, user: '0x7b...1c4', side: 'Short', amount: '0.12 BTC', time: '5 mins ago', outcome: 'Pending' },
  { id: 3, user: '0x9c...2d1', side: 'Long', amount: '0.02 BTC', time: '12 mins ago', outcome: 'Pending' },
  { id: 4, user: '0x4d...8e3', side: 'Short', amount: '0.50 BTC', time: '15 mins ago', outcome: 'Won' },
  { id: 5, user: '0x1f...5a6', side: 'Long', amount: '0.10 BTC', time: '22 mins ago', outcome: 'Lost' },
];

export const miningRoundsData = [
  { id: '#8491', res: 'Long', price: '745.98', payout: '1.95x', pool: '$12,450' },
  { id: '#8490', res: 'Short', price: '742.15', payout: '2.05x', pool: '$15,200' },
  { id: '#8489', res: 'Short', price: '738.40', payout: '1.85x', pool: '$11,900' },
  { id: '#8488', res: 'Long', price: '744.20', payout: '1.92x', pool: '$13,800' },
  { id: '#8487', res: 'Long', price: '743.10', payout: '1.91x', pool: '$14,200' },
  { id: '#8486', res: 'Short', price: '741.50', payout: '2.10x', pool: '$16,500' },
];
