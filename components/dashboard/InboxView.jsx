import React, { useState } from 'react';

const mockInterests = [
  {
    id: 1,
    name: 'Aishwarya R.',
    age: 26,
    profession: 'Software Engineer',
    location: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=120&h=120',
    date: '18 June 2026',
    status: 'Pending',
  },
  {
    id: 2,
    name: 'Meera Joseph',
    age: 25,
    profession: 'Doctor',
    location: 'Kochi',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=120&h=120',
    date: '16 June 2026',
    status: 'Pending',
  },
];

export default function InboxView() {
  const [interests, setInterests] = useState(mockInterests);
  const [activeTab, setActiveTab] = useState('interests');

  const handleAction = (id, newStatus) => {
    setInterests((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <section className="rounded-none md:rounded-xl border-none md:border md:border-slate-200/60 bg-transparent md:bg-white p-0 md:p-6 shadow-none md:shadow-sm text-left">
        <div className="mb-6 border-b border-slate-100 pb-4">
          <h2 className="text-base font-bold text-charcoal-text uppercase tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-deep-maroon"></span>
            Inbox Messages
          </h2>
          
          {/* Tab selector */}
          <div className="flex gap-4 mt-4 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('interests')}
              className={`pb-2 px-1 border-b-2 cursor-pointer transition-colors ${
                activeTab === 'interests' ? 'border-deep-maroon text-deep-maroon' : 'border-transparent text-soft-gray hover:text-charcoal-text'
              }`}
            >
              Received Interests ({interests.filter(i => i.status === 'Pending').length})
            </button>
            <button
              onClick={() => setActiveTab('chats')}
              className={`pb-2 px-1 border-b-2 cursor-pointer transition-colors ${
                activeTab === 'chats' ? 'border-deep-maroon text-deep-maroon' : 'border-transparent text-soft-gray hover:text-charcoal-text'
              }`}
            >
              Direct Chats (0)
            </button>
          </div>
        </div>

        {activeTab === 'interests' ? (
          <div className="space-y-4">
            {interests.length === 0 ? (
              <div className="text-center py-10 text-xs text-soft-gray">No new interests received.</div>
            ) : (
              interests.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200/80 transition-colors">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-50 border border-slate-200 shrink-0 self-center sm:self-auto">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-center sm:text-left">
                    <div>
                      <h4 className="font-bold text-charcoal-text text-sm">{item.name}</h4>
                      <p className="text-xs text-soft-gray font-medium mt-0.5">{item.age} yrs • {item.profession} • {item.location}</p>
                      <p className="text-[10px] text-slate-400 mt-1">Received on {item.date}</p>
                    </div>

                    <div className="shrink-0 flex items-center justify-center gap-2">
                      {item.status === 'Pending' ? (
                        <>
                          <button
                            onClick={() => handleAction(item.id, 'Accepted')}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold py-1.5 px-4 rounded-lg shadow-sm active:scale-95 transition-all cursor-pointer"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleAction(item.id, 'Declined')}
                            className="border border-slate-200 hover:border-slate-300 bg-white text-soft-gray hover:text-charcoal-text text-[11px] font-semibold py-1.5 px-4 rounded-lg shadow-sm active:scale-95 transition-all cursor-pointer"
                          >
                            Decline
                          </button>
                        </>
                      ) : (
                        <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                          item.status === 'Accepted' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
                        }`}>
                          Interest {item.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="text-center py-12 text-xs text-soft-gray">
            <span className="material-symbols-outlined text-[36px] text-slate-300 mb-2">forum</span>
            <p>Initiate direct chats with accepted matches.</p>
            <p className="text-[10px] mt-1 text-deep-maroon font-semibold">Requires Premium Membership upgrade.</p>
          </div>
        )}
      </section>
    </div>
  );
}
