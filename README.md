# NW Window Tinting — 10-Year Anniversary Giveaway

Production landing page for the "10 Cars for 10 Years" giveaway campaign.

## Stack
- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **Lucide React** icons
- Deploys to **Vercel**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Push to GitHub → connect repo in Vercel → auto-deploys on push to `main`.

## Form Integration

The entry form in `components/EntryForm.tsx` has a placeholder submit handler. Replace the simulated fetch with your real endpoint:

- **Airtable**: POST to Airtable API with your base ID
- **Webhook/Zapier**: POST to your webhook URL
- **Custom API route**: Create `app/api/enter/route.ts`
- **Podium**: Integrate via Podium API for SMS follow-up

Search for `SUBMIT HOOK` and `ANALYTICS HOOK` in the codebase to find integration points.

## Campaign Details
- 10 prizes across 3 tiers (1 grand prize, 3 runner-up, 6 anniversary credits)
- SMS consent capture for post-giveaway monetization
- Past customer identification for segmentation
- Bonus entry tracking for social sharing
- Non-winner "anniversary offer" follow-up sequence built into UX
