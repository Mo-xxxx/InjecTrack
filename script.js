<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-javascript@2"></script>

// 1. Initialize Supabase Client
// Replace these placeholders with your credentials from Supabase Settings -> API
const SUPABASE_URL = 'https://atwpvjoqzwppzvsdhkjv.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_BHv8N_ePhm_SHk0G7xi5Aw_e48ljjCVe';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 2. Example: Fetch Data from a Table
async function fetchRecords() {
  const { data, error } = await supabase
    .from('your_table_name')
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  console.log('Fetched Data:', data);
}

// 3. Example: Insert Data into a Table
async function addRecord(newData) {
  const { data, error } = await supabase
    .from('your_table_name')
    .insert([newData]);

  if (error) {
    console.error('Error inserting data:', error);
    return;
  }

  console.log('Inserted Data:', data);
}

// Call function on page load
document.addEventListener('DOMContentLoaded', fetchRecords);

// Modal Element References
const modal = document.getElementById('payment-modal');
const upgradeBtn = document.querySelector('.Upgrade to Pro button selector'); // Update to match your button selector/ID
const closeModalBtn = document.getElementById('close-modal-btn');
const checkoutForm = document.getElementById('checkout-form');

// 1. Open Modal on Upgrade Click
upgradeBtn?.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// 2. Close Modal
closeModalBtn?.addEventListener('click', () => {
  modal.style.display = 'none';
});

// 3. Handle Payment Submission
checkoutForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const payBtn = document.getElementById('pay-now-btn');
  
  // UI Loading State
  payBtn.disabled = true;
  payBtn.innerText = 'Processing Payment...';

  // Simulate API delay (1.5 seconds)
  setTimeout(async () => {
    // Hide modal
    modal.style.display = 'none';
    payBtn.disabled = false;
    payBtn.innerText = 'Pay $149.00';

    // Optional: Update subscription status in Supabase
    /*
    const { data, error } = await supabase
      .from('users')
      .update({ tier: 'Pro' })
      .eq('id', currentUser.id);
    */

    alert('Success! Your MedSpa account has been upgraded to the Pro Tier.');
    window.location.reload(); // Refresh page to reflect new Pro UI states
  }, 1500);
});

// Middleware / Authorization Check
if (user.role !== 'ADMIN' && !user.isDemoAdmin) {
  return redirect('/dashboard?error=unauthorized');
}
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8 text-gray-600">Have questions? Send us a message and our team will get back to you.</p>
      <ContactForm />
    </main>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-8 mt-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} YourAppName. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-sm text-gray-600 hover:underline">Privacy</Link>
          <Link href="/terms" className="text-sm text-gray-600 hover:underline">Terms</Link>
          {/* Single link pointing to the dedicated contact page */}
          <Link href="/contact" className="text-sm font-medium text-blue-600 hover:underline">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}

<Link href="/contact" className="hover:text-blue-600">Contact</Link>

