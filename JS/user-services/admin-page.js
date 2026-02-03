import { pageGuardian } from "../services/guardians.js";
import { aboutMe } from "../services/my-profile.js";
import { logOut } from "../services/log-out.js";

pageGuardian()

const STORAGE_KEY = "listadoForm";

// Stats
const totalEl = document.getElementById("total");
const pendingEl = document.getElementById("pending");
const completedEl = document.getElementById("completed");

// Profile
const profileBtn = document.getElementById("profile");
const profileContainer = document.getElementById("profile-container");
const logOutBtn = document.getElementById("log-out");

document.addEventListener("DOMContentLoaded", loadDashboard);

/* =====================
   DASHBOARD
===================== */

function getTasks() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || [];
}

function loadDashboard() {
  const tasks = getTasks();

  totalEl.textContent = tasks.length;
  pendingEl.textContent = tasks.filter(t =>
    t.statusText.toLowerCase() === "pending"
  ).length;
  completedEl.textContent = tasks.filter(t =>
    t.statusText.toLowerCase() === "completed"
  ).length;
}

/* PROFILE */

// --- Lógica de Usuario ---

logOutBtn.addEventListener("click", () => {
    logOut(logOutBtn);
    pageGuardian();
});

profileBtn.addEventListener("click", () => {
  if (!profileContainer.classList.contains("hidden")) {
    closeProfile();
  } else {
    openProfile();
  }
});

function openProfile() {
  const data = aboutMe();
  profileContainer.innerHTML = createProfileCard(data);
  profileContainer.classList.remove("hidden");
  profileBtn.textContent = "Close";
}

function closeProfile() {
  profileContainer.classList.add("hidden");
  profileContainer.innerHTML = "";
  profileBtn.textContent = "My profile";
}

function createProfileCard(data) {
  return `
    <div
        class="bg-[#0A1A3A] border border-white/10
        rounded-xl p-6
        shadow-[0px_20px_40px_#000516]
        max-w-xl mx-auto mt-6">


      <h2 class="text-lg font-semibold text-white mb-4">
        My Profile
      </h2>

      <div class="space-y-3 text-sm">
        <div class="flex justify-between">
          <span class="text-[#ecf1ff]/70">Full Name</span>
          <span>${data.fullUserName}</span>
        </div>

        <div class="flex justify-between">
          <span class="text-[#ecf1ff]/70">Email</span>
          <span>${data.userEmail}</span>
        </div>

        <div class="flex justify-between">
          <span class="text-[#ecf1ff]/70">Password</span>
          <span>${data.userPassword}</span>
        </div>

        <div class="flex justify-between">
          <span class="text-[#ecf1ff]/70">User ID</span>
          <span>${data.userID}</span>
        </div>
      </div>
    </div>
  `;
}
