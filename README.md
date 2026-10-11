# Samsung PRISM: VLM-TAMP Robotics Progress Portal

Interactive progress update website built for the **Samsung PRISM** project:  
**"VLM-TAMP – A ROS2 implementation for language-guided Robotic Manipulation"**  
Department: **CTECH & Mechanical, SRM Institute of Science and Technology (SRMIST)**

---

## 🚀 Live Local Access
The website is currently served locally via HTTP:
```
http://localhost:8085/index.html
```

To run the server anytime in the presentation directory:
```powershell
python -m http.server 8085
```
Or simply open `index.html` directly in any modern browser (Chrome, Edge, Firefox).

---

## 📋 What the Website Covers

### 1. Project Foundations & Scope (From the 2 Uploaded Screenshots)
* **Slide 1 Overview (`project_overview_slide1.png`)**:
  * **Title:** [Samsung PRISM] Preliminary Discussion — *VLM-TAMP: A ROS2 implementation for language-guided Robotic Manipulation*.
  * **Faculty Mentors:** Dr. B. Sowmiya (`sowmiyab@srmist.edu.in`), Dr. Dr. V. Manoj Kumar (`manojkuv@srmist.edu.in`).
  * **Student Researchers:** Jasveer Singh Tuteja (`jt9019@srmist.edu.in`), Revant Lenka (`rl7977@srmist.edu.in`), Sattwik Bose (`sb1674@srmist.edu.in`), Saravanan R (`sr7874@srmist.edu.in`).
  * **Institution:** SRM Institute of Science and Technology (CTECH & Mechanical).
* **Slide 2 Requirements (`worklet_requirements_slide2.png`)**:
  * **Problem Statement:** Modular, ROS2-native Vision-Language-Model-guided Task and Motion Planning (VLM-TAMP) for long-horizon robot manipulation. Takes natural language goals and scene states as input, queries VLM for semantic subgoals, ensures geometric feasibility via TAMP, executes on robots in simulation, and enables closed-loop dynamic replanning.
  * **Core Deliverables:** 
    * `vlm_subgoal_node` (high-level goal decomposition)
    * `tamp_planner_node` (PDDL + motion planning)
    * `plan_executor_node` (MoveIt / controller execution)
    * `scene_state_node` (symbolic + geometric world model)
    * ROS2 Actions: `GenerateSubgoals`, `PlanTask`, `ExecutePlan`
  * **Simulation Stacks:** Gazebo, PyBullet Kitchen World, and stretch goal Isaac Sim bridge.

---

### 2. Progress & Accomplishments Worked on Till Now
* **Phase 1: Baseline Manipulation in Kitchen World (Completed)**
  * Scissors pick-and-place operation on tabletop tray.
  * Cabbage retrieval from refrigerator to counter.
  * Chicken leg retrieval and grasp execution.
  * Bottle pick-and-place manipulation.
  * Custom 4-Room World Model with human models as dynamic obstacles and bottleneck single doors.
* **Phase 2: World Model & Scene Graph Runtime (Completed)**
  * Continuous PyBullet physical body to Scene Graph semantic object synchronization.
  * Dynamic relationships: `HOLDS(Robot, obj)`, `SUPPORTS(Counter, obj)`, `CONTAINS(Cupboard, obj)`.
  * Event manager detecting `OBJECT_ADDED`, `OBJECT_MOVED`, `OBJECT_REMOVED`, `OBJECT_PICKED`, `OBJECT_DROPPED`.
  * Natural language chatbot integration for conversational prompting.
* **Phase 3: Dynamic Replanning Architecture (Completed)**
  * Real-time bridge `DynamicReplanner` delegating to PDDLStream agents.
  * **Environment B Stress Test Success:** Successfully recovered from moving obstacle disturbance at `(0.5, 0.5, 0.45)` with `0.0000 m` final error!
  * 12-case perturbation test matrix (T1 through T12).
* **Phase 4: Latest Sprint: New Kitchen World & Dynamic Replanning Testing (Validated)**
  * Upgraded PyBullet Kitchen World environment with realistic appliances (dishwasher, braiser, multi-station counters).
  * Direct runtime hook embedded in `pddlstream_agent.py` to intercept disturbance events.
  * Live dynamic replanning testing with in-flight perturbations and FastDownward recovery re-synthesis.
  * Validated through `cabbage_runtime_final.log` and captured in `replanning.webm`.

---

### 3. Integrated Video & Media Files
All media files from your workspace are integrated and playable directly:
1. `replanning.webm` — **NEW (Last Week Update):** Live testing of dynamic replanning in the newly upgraded Kitchen World environment.
2. `cabbage.webm` — Video 1: Baseline cabbage retrieval from refrigerator.
3. `cabbage_with_screen_graph.webm` — Video 2: Real-time Scene Graph overlay and relationship updates.
4. `chatbot_integration.webm` — Video 3: Natural language chatbot interface & subgoal decomposition.
5. `chicken_leg.webm` — Video 4: Grasping and manipulation of irregular organic objects.
6. `fork.webm` — Video 5: Precision utensil manipulation.
7. `dynamic_recovery_sim.webm` — Video 6: Environment B stress-test obstacle disturbance & dynamic recovery loop.
8. `project_overview_slide1.png` & `worklet_requirements_slide2.png` — Click-to-enlarge modal inspection of your original presentation slides.

---

## 🎨 Design & Interactivity Highlights
- **Pure White Executive Theme:** Clean, crisp presentation aesthetic optimized for formal Samsung reviews.
- **Top Header Focus:** Simplified executive header focusing on the project title and university affiliation.
- **Dedicated Sprint Showcase:** Prominent feature card for the newly created Kitchen World and dynamic replanning tests with 7.3 MB video playback.
- **Interactive Modals:** Click any screenshot or video to view in an enlarged, cinema-style modal with playback controls and keyboard navigation (`Esc` to close).
- **Category Filter Tabs:** Effortlessly filter demos by *All (7)*, *⭐ Last Week Update*, *Baseline Tasks*, *Scene Graph & AI*, and *Dynamic Recovery*.
- **Subsystem Architecture Cards:** Clean white overview cards detailing the AIRuntime Coordinator, DynamicReplanner Hook, Graph Updaters, and Event Manager.
- **T1–T12 Disturbance Matrix Grid:** Comprehensive overview of all 12 perturbation test scenarios.
- **Fully Responsive:** Optimized for desktop presentation screens, laptops, and mobile devices.
