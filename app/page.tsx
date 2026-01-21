"use client";

import { useMemo, useState, useCallback } from "react";
import { getQuoteForDay, getDayOfYear, formatDate } from "@/lib/quotes";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StoicBackground } from "@/components/stoic-background";

export default function Home() {
  const todayDayOfYear = useMemo(() => getDayOfYear(new Date()), []);
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  
  const [viewingDay, setViewingDay] = useState(todayDayOfYear);

  const quote = useMemo(() => getQuoteForDay(viewingDay), [viewingDay]);
  
  const viewingDate = useMemo(() => {
    const date = new Date(currentYear, 0);
    date.setDate(viewingDay);
    return date;
  }, [viewingDay, currentYear]);

  const canGoBack = viewingDay > 1;
  const canGoForward = viewingDay < todayDayOfYear;
  const isToday = viewingDay === todayDayOfYear;

  const goToPreviousDay = useCallback(() => {
    setViewingDay(prev => Math.max(1, prev - 1));
  }, []);

  const goToNextDay = useCallback(() => {
    setViewingDay(prev => Math.min(todayDayOfYear, prev + 1));
  }, [todayDayOfYear]);

  const goToToday = useCallback(() => {
    setViewingDay(todayDayOfYear);
  }, [todayDayOfYear]);

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      <StoicBackground />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-6 md:p-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-muted-foreground font-sans text-xs tracking-[0.2em] uppercase">
            Sabiduría Diaria
          </span>
          <span className="text-muted-foreground font-sans text-xs tracking-wider">
            Día {viewingDay} / 365
          </span>
        </div>
      </header>

      {/* Main content */}
      <div className="w-full max-w-4xl mx-auto px-6 md:px-8 py-24">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
          <p className="text-muted-foreground font-sans text-sm tracking-wide mb-8 md:mb-12 text-center capitalize">
            {formatDate(viewingDate)}
          </p>

          {quote && (
            <>
              <blockquote className="mb-8 md:mb-12">
                <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-foreground leading-relaxed text-center text-balance">
                  &ldquo;{quote.text}&rdquo;
                </p>
              </blockquote>
              <p className="text-accent font-sans text-sm md:text-base tracking-[0.15em] uppercase text-center">
                — {quote.author}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPreviousDay}
            disabled={!canGoBack}
            className="text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Día anterior</span>
          </Button>

          {!isToday && (
            <Button
              variant="ghost"
              size="sm"
              onClick={goToToday}
              className="text-muted-foreground hover:text-foreground hover:bg-secondary text-xs tracking-wider uppercase"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Hoy
            </Button>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNextDay}
            disabled={!canGoForward}
            className="text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Día siguiente</span>
          </Button>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border">
          <div
            className="h-full bg-accent/50 transition-all duration-500"
            style={{ width: `${(viewingDay / 365) * 100}%` }}
          />
        </div>
      </nav>
    </main>
  );
}
