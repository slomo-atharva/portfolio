import React from 'react';

const CaseStudy = () => {
  return (
    <div className="font-ibm bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm text-gray-600 uppercase tracking-wider">CASE STUDY</p>
            <h1 className="text-5xl font-light leading-tight">
              Redesigning the Heart of<br />
              <span className="font-medium">StratCore</span>
            </h1>
            <p className="text-xl text-gray-600 font-light">A Dashboard Revolution Case Study</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded border-l-4 border-gray-300">
            <p className="text-sm text-gray-700 italic">
              Note: Due to NDA requirements, some details including client names, specific metrics, and software branding have been modified while maintaining the integrity of the design process and outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-light">The Challenge That Changed Everything</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Picture this: You're working on a successful enterprise project management platform used by major corporations, government organizations, and large enterprises across multiple sectors. The platform once had 13 major clients, but that number had dropped to just 5-6. The culprit? A 10-year-old dashboard that was driving users away faster than you could say "legacy software."
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-50 aspect-video rounded flex items-center justify-center border">
            <div className="text-center text-gray-500">
              <div className="text-2xl mb-2">📊</div>
              <p className="text-sm">Problem Visualization</p>
              <p className="text-xs mt-1">Before/After comparison showing cluttered vs clean layout</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">The Problem Was Clear:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Client retention dropped from 13 to 5-6 major enterprises</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Users couldn't find essential project information without navigating through multiple workspaces</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Confusing action categories ("Actions" vs "Assigned to me" - what's the difference?)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Zero-value content taking up prime dashboard real estate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Inconsistent typography and cluttered UI creating cognitive overload</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-light">The "Aha!" Moment: Going Back to Basics</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Before jumping into pretty UI fixes, we knew we needed a reality check. StratCore has hundreds of dashboards and workspaces, but most weren't being used effectively. We partnered with business consultants who regularly speak with clients to understand what actually matters.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-50 aspect-video rounded flex items-center justify-center border">
            <div className="text-center text-gray-500">
              <div className="text-2xl mb-2">🔍</div>
              <p className="text-sm">Research Process</p>
              <p className="text-xs mt-1">Miro board showing user research and journey mapping</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Our Discovery Process:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Analyzed user behavior patterns across all client organizations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Identified the core workflows for Project Managers (PM) and Portfolio Management Office (PMO) users</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Created information architecture focused only on high-value, frequently-used features</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 flex-shrink-0"></span>
                <span>Developed user personas based on real usage data, not assumptions</span>
              </li>
            </ul>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-50 aspect-video rounded flex items-center justify-center border">
            <div className="text-center text-gray-500">
              <div className="text-2xl mb-2">🗺️</div>
              <p className="text-sm">Information Architecture</p>
              <p className="text-xs mt-1">Flowchart showing the new structure and user flows</p>
            </div>
          </div>
        </div>
      </section>

      {/* PM Dashboard Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-light">The PM Dashboard: From Chaos to Clarity</h2>
            <h3 className="text-xl font-medium">The Strategic Shift: Project-Centric Design</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Instead of overwhelming PMs with every possible workspace, we made a crucial decision: focus on projects, not features. Most PMs handle 1-2 projects normally (3-4 in worst cases), so why not design around that reality?
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-50 aspect-video rounded flex items-center justify-center border">
            <div className="text-center text-gray-500">
              <div className="text-2xl mb-2">📋</div>
              <p className="text-sm">PM Dashboard Concept</p>
              <p className="text-xs mt-1">Low-fi wireframes showing project-centric approach</p>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-medium">Key Innovations:</h4>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h5 className="font-medium">🎯 Project Selection at the Top</h5>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Clean dropdown to select which project to manage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Everything below updates contextually to that specific project</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="font-medium">📊 Visual Timeline View</h5>
                <div className="space-y-2 text-gray-700 ml-6">
                  <p><strong>Before:</strong> Users had to visit multiple workspaces to understand project status</p>
                  <p><strong>After:</strong> One visual timeline showing deliverables, benefits, risks, and product due dates</p>
                  <p><strong>Impact:</strong> Instant project overview without clicking through dozens of pages</p>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gray-50 aspect-video rounded flex items-center justify-center border">
              <div className="text-center text-gray-500">
                <div className="text-2xl mb-2">⏱️</div>
                <p className="text-sm">Timeline Component</p>
                <p className="text-xs mt-1">Close-up of the timeline feature visualization</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h5 className="font-medium">📝 Intelligent Activity Log</h5>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Real-time feed of all project activities (edits, creations, updates)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Click any activity to jump directly to where the change was made</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span><strong>User Feedback:</strong> "Finally, I can track what happened without playing detective"</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="font-medium">📈 Project Status Report (PSR) Trend</h5>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Visual timeline of past reporting cycles showing on-track/off-track/alert status</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>One-click access to create new PSR for current cycle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span><strong>Measurable Impact:</strong> PSR creation time reduced from 15+ minutes to under 3 minutes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gray-50 aspect-video rounded flex items-center justify-center border">
              <div className="text-center text-gray-500">
                <div className="text-2xl mb-2">📈</div>
                <p className="text-sm">PSR Trend Visualization</p>
                <p className="text-xs mt-1">Chart showing status trends and data visualization</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h5 className="font-medium">✅ Simplified Actions Panel</h5>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Eliminated confusing "Actions" vs "Assigned to me" categories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Clear status-based organization (Overdue, Due Today, Upcoming)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span><strong>Result:</strong> Action completion rates increased by 40%</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="font-medium">🔧 Essential Workspaces Only</h5>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Curated list of most-used PM workspaces (proposals, project plans, governance, reporting)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Quick access search for anything else needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PMO Dashboard Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-light">The PMO Dashboard: Managing Complexity Simply</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              PMOs handle multiple projects simultaneously, so we designed for scale and oversight:
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-50 aspect-video rounded flex items-center justify-center border">
            <div className="text-center text-gray-500">
              <div className="text-2xl mb-2">🏢</div>
              <p className="text-sm">PMO Dashboard Overview</p>
              <p className="text-xs mt-1">Wide shot of the new PMO layout</p>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-medium">Portfolio-Level Intelligence:</h4>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h5 className="font-medium">🏢 Workspace Hierarchy</h5>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span><strong>Daily Operations:</strong> Project and portfolio management tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span><strong>Configuration Management:</strong> Compliance, setup, and organizational tools</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="font-medium">📊 Centralized Reporting Hub</h5>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Published reports for current cycle in one view</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Custom report templates for requesting PM reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span><strong>Time Savings:</strong> Report compilation reduced from 2+ hours to 30 minutes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gray-50 aspect-video rounded flex items-center justify-center border">
              <div className="text-center text-gray-500">
                <div className="text-2xl mb-2">📋</div>
                <p className="text-sm">Reports Section</p>
                <p className="text-xs mt-1">Close-up of the reporting interface or kanban board</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h5 className="font-medium">📋 Kanban Action Management</h5>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Visual priority-based action board</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Clear status progression from assignment to completion</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h5 className="font-medium">⭐ Smart Watchlists</h5>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Pin critical dashboards and workspaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                    <span>Customizable monitoring for high-priority items</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="space-y-12">
          <h2 className="text-3xl font-light">The Numbers Don't Lie</h2>
          
          <div className="bg-gray-50 p-8 rounded">
            <h3 className="text-xl font-medium mb-8 text-center">Quantifiable Improvements</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="pb-4 pr-8 font-medium">Metric</th>
                    <th className="pb-4 pr-8 font-medium">Before Redesign</th>
                    <th className="pb-4 pr-8 font-medium">After Redesign</th>
                    <th className="pb-4 font-medium">Improvement</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-8">Average task completion time</td>
                    <td className="py-4 pr-8">8.5 minutes</td>
                    <td className="py-4 pr-8">3.2 minutes</td>
                    <td className="py-4 font-medium">62% faster</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-8">Dashboard navigation clicks</td>
                    <td className="py-4 pr-8">12-15 clicks</td>
                    <td className="py-4 pr-8">3-5 clicks</td>
                    <td className="py-4 font-medium">73% reduction</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-8">User satisfaction score</td>
                    <td className="py-4 pr-8">2.4/5</td>
                    <td className="py-4 pr-8">4.2/5</td>
                    <td className="py-4 font-medium">75% increase</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-8">Time to find project info</td>
                    <td className="py-4 pr-8">5+ minutes</td>
                    <td className="py-4 pr-8">30 seconds</td>
                    <td className="py-4 font-medium">90% reduction</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-8">PSR creation time</td>
                    <td className="py-4 pr-8">15+ minutes</td>
                    <td className="py-4 pr-8">&lt;3 minutes</td>
                    <td className="py-4 font-medium">80% faster</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded text-center border-l-4 border-gray-400">
            <blockquote className="text-lg italic text-gray-700 mb-4">
              "The new dashboard feels like we're using a completely different product. Everything I need is right there, and it actually makes sense now."
            </blockquote>
            <cite className="text-gray-600 font-medium">— PMO Director, Enterprise Client</cite>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="space-y-12">
          <h2 className="text-3xl font-light">Design Principles That Drove Success</h2>

          {/* Image Placeholder */}
          <div className="bg-gray-50 aspect-video rounded flex items-center justify-center border">
            <div className="text-center text-gray-500">
              <div className="text-2xl mb-2">🎨</div>
              <p className="text-sm">Design System</p>
              <p className="text-xs mt-1">Visual showing design principles and component library</p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">1</div>
              <div>
                <h4 className="font-medium mb-2">Context Over Content</h4>
                <p className="text-gray-700">Show relevant information based on user selection, not everything at once</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">2</div>
              <div>
                <h4 className="font-medium mb-2">Visual Hierarchy Matters</h4>
                <p className="text-gray-700">Most important tasks get prime real estate. Secondary functions remain accessible but don't clutter</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">3</div>
              <div>
                <h4 className="font-medium mb-2">Reduce Cognitive Load</h4>
                <p className="text-gray-700">Consistent visual language, clear action states and feedback, logical information grouping</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">4</div>
              <div>
                <h4 className="font-medium mb-2">Speed of Completion</h4>
                <p className="text-gray-700">Optimize for user goals, not feature showcasing. Minimize clicks to common actions</p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-50 aspect-video rounded flex items-center justify-center border">
            <div className="text-center text-gray-500">
              <div className="text-2xl mb-2">🔄</div>
              <p className="text-sm">Before/After UI Comparison</p>
              <p className="text-xs mt-1">Side-by-side showing key component improvements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-light">The Ripple Effect: Beyond Pretty Interfaces</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The redesign didn't just improve usability—it changed user behavior:
            </p>
          </div>

          <div className="grid gap-6">
            <div>
              <h4 className="font-medium mb-2">Increased Feature Adoption</h4>
              <p className="text-gray-700">Users now explore previously hidden capabilities</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Better Project Outcomes</h4>
              <p className="text-gray-700">Faster information access leads to quicker decision-making</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Client Retention</h4>
              <p className="text-gray-700">Early indicators show improved client satisfaction and reduced churn risk</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Internal Confidence</h4>
              <p className="text-gray-700">Our team now has a clear design system and user-centered approach for future features</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-light">What's Next?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              This dashboard redesign is just the beginning. We're already seeing requests for similar improvements across other StratCore modules. The user feedback has been overwhelmingly positive, with clients asking when they can expect the full rollout.
            </p>
          </div>

          <div className="bg-black text-white p-8 rounded text-center">
            <h3 className="text-xl font-medium mb-4">Key Takeaway</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Sometimes the best innovation isn't adding more features—it's removing the friction that prevents users from achieving their goals. By focusing on what actually matters to PMs and PMOs, we transformed a legacy liability into a competitive advantage.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This redesign represents a fundamental shift in how we approach enterprise software design at StratCore. By putting user needs first and backing decisions with real data, we've created dashboards that don't just look better—they work better.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;

