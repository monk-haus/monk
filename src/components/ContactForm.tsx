'use client';

import { useActionState } from 'react';
import { sendContactEmail } from '@/app/actions';
import { useEffect, useRef } from 'react';

const initialState = {
    success: false,
    message: '',
};

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.success && formRef.current) {
            formRef.current.reset();
        }
    }, [state.success]);

    return (
        <form ref={formRef} action={formAction} className="w-full max-w-2xl space-y-12">
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-2 group">
                    <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-newsprint/60 group-hover:text-signal transition-colors">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-transparent border-b border-newsprint/20 py-2 font-mono text-sm text-newsprint focus:outline-none focus:border-signal transition-colors placeholder:text-newsprint/20"
                        placeholder="Your Name"
                    />
                </div>

                <div className="space-y-2 group">
                    <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-newsprint/60 group-hover:text-signal transition-colors">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-transparent border-b border-newsprint/20 py-2 font-mono text-sm text-newsprint focus:outline-none focus:border-signal transition-colors placeholder:text-newsprint/20"
                        placeholder="your@email.com"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-2 group">
                    <label htmlFor="projectType" className="font-mono text-xs uppercase tracking-widest text-newsprint/60 group-hover:text-signal transition-colors">
                        Project Type
                    </label>
                    <div className="relative">
                        <select
                            id="projectType"
                            name="projectType"
                            defaultValue=""
                            className="w-full bg-transparent border-b border-newsprint/20 py-2 font-mono text-sm text-newsprint focus:outline-none focus:border-signal transition-colors appearance-none rounded-none cursor-pointer"
                        >
                            <option value="" disabled className="bg-void text-newsprint/40">Select Type</option>
                            <option value="Creative Direction" className="bg-void text-newsprint">Creative Direction</option>
                            <option value="Web Design" className="bg-void text-newsprint">Web Design</option>
                            <option value="Development" className="bg-void text-newsprint">Development</option>
                            <option value="Full Project" className="bg-void text-newsprint">Full Project</option>
                            <option value="Other" className="bg-void text-newsprint">Other</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-newsprint/40 text-[10px]">
                            ▼
                        </div>
                    </div>
                </div>

                <div className="space-y-2 group">
                    <label htmlFor="budget" className="font-mono text-xs uppercase tracking-widest text-newsprint/60 group-hover:text-signal transition-colors">
                        Budget
                    </label>
                    <div className="relative">
                        <select
                            id="budget"
                            name="budget"
                            defaultValue=""
                            className="w-full bg-transparent border-b border-newsprint/20 py-2 font-mono text-sm text-newsprint focus:outline-none focus:border-signal transition-colors appearance-none rounded-none cursor-pointer"
                        >
                            <option value="" disabled className="bg-void text-newsprint/40">Select Range</option>
                            <option value="<5k" className="bg-void text-newsprint">&lt; 5k EUR</option>
                            <option value="5k-10k" className="bg-void text-newsprint">5k - 10k EUR</option>
                            <option value="10k-20k" className="bg-void text-newsprint">10k - 20k EUR</option>
                            <option value=">20k" className="bg-void text-newsprint">&gt; 20k EUR</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-newsprint/40 text-[10px]">
                            ▼
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-2 group">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-newsprint/60 group-hover:text-signal transition-colors">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-transparent border-b border-newsprint/20 py-2 font-mono text-sm text-newsprint focus:outline-none focus:border-signal transition-colors placeholder:text-newsprint/20 resize-none"
                    placeholder="Tell us about your project..."
                />
            </div>

            <div className="pt-8">
                <button
                    type="submit"
                    disabled={isPending}
                    className="group relative px-8 py-4 bg-transparent border border-newsprint/20 hover:bg-newsprint transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden w-full md:w-auto"
                >
                    <div className="absolute inset-0 w-full h-full bg-newsprint translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                    <span className="relative z-10 flex items-center justify-center gap-4 font-mono text-xs uppercase tracking-widest text-newsprint group-hover:text-void transition-colors duration-300">
                        {isPending ? (
                            <>
                                <span className="w-2 h-2 bg-current animate-pulse"></span>
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message
                                <span className="text-[10px]">→</span>
                            </>
                        )}
                    </span>
                </button>
            </div>

            {state.message && (
                <div className={`mt-8 p-4 border font-mono text-xs uppercase tracking-widest ${state.success ? 'border-bio/50 text-bio' : 'border-signal/50 text-signal'}`}>
                    <span className="mr-4">[{state.success ? 'SUCCESS' : 'ERROR'}]</span>
                    {state.message}
                </div>
            )}
        </form>
    );
}
