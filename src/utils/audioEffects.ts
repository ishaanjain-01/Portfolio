/**
 * Lightweight Web Audio API synthesizer for tactile UI micro-interactions.
 * Generates crisp, subtle, physical-grade audio feedback without external audio files.
 * Zero-latency, zero-bandwidth, and strictly offline-capable.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = true;
  private noiseBuffer: AudioBuffer | null = null;

  constructor() {
    // Check localStorage preference if available
    try {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('ishaan_portfolio_sound');
        if (stored !== null) {
          this.soundEnabled = stored === 'true';
        }
      }
    } catch {
      // Safe fallback
    }
  }

  private initContext(): boolean {
    if (!this.soundEnabled) return false;
    if (typeof window === 'undefined') return false;

    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      return !!this.ctx;
    } catch {
      return false;
    }
  }

  /**
   * Generates a reusable cached pink/paper noise buffer for realistic textured friction.
   */
  private getNoiseBuffer(): AudioBuffer | null {
    if (!this.ctx) return null;
    if (this.noiseBuffer) return this.noiseBuffer;

    try {
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.6); // 0.6 second buffer
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Soft pink noise approximation for organic paper friction
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        data[i] = (b0 + b1 + b2 + white * 0.5362) * 0.12;
      }
      this.noiseBuffer = buffer;
      return this.noiseBuffer;
    } catch {
      return null;
    }
  }

  public isEnabled(): boolean {
    return this.soundEnabled;
  }

  public toggleSound(): boolean {
    this.soundEnabled = !this.soundEnabled;
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('ishaan_portfolio_sound', String(this.soundEnabled));
        window.dispatchEvent(new CustomEvent('portfolio-sound-change', { detail: this.soundEnabled }));
      }
    } catch {
      // ignore
    }
    if (this.soundEnabled) {
      this.playSuccess();
    }
    return this.soundEnabled;
  }

  public toggle(): boolean {
    return this.toggleSound();
  }

  public setSoundEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('ishaan_portfolio_sound', String(enabled));
        window.dispatchEvent(new CustomEvent('portfolio-sound-change', { detail: enabled }));
      }
    } catch {
      // ignore
    }
  }

  /**
   * Authentic Physical Folder Switch Sound:
   * Generates paper friction slide + cardstock resonance + subtle page shuffle.
   */
  public playFolderSwitch(direction: number = 1) {
    if (!this.soundEnabled) return;
    try {
      if (!this.initContext() || !this.ctx) return;

      const now = this.ctx.currentTime;

      // Layer 1: Textured Paper Friction (Filtered Noise Sweep)
      const noise = this.getNoiseBuffer();
      if (noise) {
        const source = this.ctx.createBufferSource();
        source.buffer = noise;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.Q.setValueAtTime(1.6, now);

        const startFreq = direction > 0 ? 2200 : 1600;
        const endFreq = direction > 0 ? 800 : 1200;
        filter.frequency.setValueAtTime(startFreq, now);
        filter.frequency.exponentialRampToValueAtTime(endFreq, now + 0.22);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.09, now + 0.025);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.23);

        source.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        source.start(now);
        source.stop(now + 0.24);
      }

      // Layer 2: Cardstock Manila Body Resonant Thud
      const bodyOsc = this.ctx.createOscillator();
      const bodyGain = this.ctx.createGain();
      bodyOsc.type = 'sine';
      bodyOsc.frequency.setValueAtTime(190, now);
      bodyOsc.frequency.exponentialRampToValueAtTime(95, now + 0.12);

      bodyGain.gain.setValueAtTime(0.05, now);
      bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);

      bodyOsc.connect(bodyGain);
      bodyGain.connect(this.ctx.destination);

      bodyOsc.start(now);
      bodyOsc.stop(now + 0.14);
    } catch {
      // Silent fail
    }
  }

  /**
   * Metallic Brass Two-Prong Archival Clamp Snap:
   * Timed with the fastener animation when a dossier is secured.
   */
  public playClampSnap() {
    if (!this.soundEnabled) return;
    try {
      if (!this.initContext() || !this.ctx) return;

      const now = this.ctx.currentTime;

      // Two rapid high-frequency micro-metallic clicks
      [2600, 3400].forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.015);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.4, now + i * 0.015 + 0.03);

        gain.gain.setValueAtTime(0.045, now + i * 0.015);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.015 + 0.035);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.015);
        osc.stop(now + i * 0.015 + 0.04);
      });
    } catch {
      // Silent fail
    }
  }

  /**
   * Authentic Rubber Ink Stamp Thud:
   * Timed with the "AUTHENTICATED RECORD" stamp imprint.
   */
  public playStamp() {
    if (!this.soundEnabled) return;
    try {
      if (!this.initContext() || !this.ctx) return;

      const now = this.ctx.currentTime;

      // Deep, punchy low-frequency rubber stamp drop
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(145, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.06);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.075);
    } catch {
      // Silent fail
    }
  }

  /**
   * Crisp Index Tab Click:
   * Immediate tactile feedback when selecting a folder tab.
   */
  public playTabClick() {
    if (!this.soundEnabled) return;
    try {
      if (!this.initContext() || !this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(950, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.03);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch {
      // Silent fail
    }
  }

  /**
   * Subtle Micro-Tick on Tab Hover:
   * Delicate, tactile feedback while moving across tabs.
   */
  public playTabHover() {
    if (!this.soundEnabled) return;
    try {
      if (!this.initContext() || !this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1600, now);

      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.012);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.015);
    } catch {
      // Silent fail
    }
  }

  /**
   * Document Unfold / Modal Open:
   * Smooth, warm harmonic tone with gentle paper fluttering.
   */
  public playModalOpen() {
    if (!this.soundEnabled) return;
    try {
      if (!this.initContext() || !this.ctx) return;

      const now = this.ctx.currentTime;
      [440, 659.25, 880].forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.03);

        gain.gain.setValueAtTime(0, now + i * 0.03);
        gain.gain.linearRampToValueAtTime(0.05, now + i * 0.03 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.03 + 0.16);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.03);
        osc.stop(now + i * 0.03 + 0.18);
      });
    } catch {
      // Silent fail
    }
  }

  /**
   * Document Tuck-in / Modal Close:
   */
  public playModalClose() {
    if (!this.soundEnabled) return;
    try {
      if (!this.initContext() || !this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(480, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.035);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.045);
    } catch {
      // Silent fail
    }
  }

  /**
   * AI Assistant Bell Ping:
   * Refined digital chime when launching Ishaan AI.
   */
  public playAiPing() {
    if (!this.soundEnabled) return;
    try {
      if (!this.initContext() || !this.ctx) return;

      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.05);

        gain.gain.setValueAtTime(0, now + i * 0.05);
        gain.gain.linearRampToValueAtTime(0.06, now + i * 0.05 + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.22);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.24);
      });
    } catch {
      // Silent fail
    }
  }

  /**
   * General Crisp Click (e.g. for button taps, filters, presets)
   */
  public playClick() {
    if (!this.soundEnabled) return;
    try {
      if (!this.initContext() || !this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.035);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.035);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch {
      // Silent fail
    }
  }

  /**
   * Subtle pleasant chime (e.g. for copy to clipboard, AI response, or milestone)
   */
  public playSuccess() {
    if (!this.soundEnabled) return;
    try {
      if (!this.initContext() || !this.ctx) return;

      const now = this.ctx.currentTime;
      [587.33, 880].forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);

        gain.gain.setValueAtTime(0, now + i * 0.06);
        gain.gain.linearRampToValueAtTime(0.07, now + i * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.18);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.2);
      });
    } catch {
      // Silent fail
    }
  }

  public playSuccessChime() {
    this.playSuccess();
  }

  /**
   * Futuristic radar pulse for AI spend extraction / scanning
   */
  public playScanPing() {
    if (!this.soundEnabled) return;
    try {
      if (!this.initContext() || !this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(1320, now + 0.12);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.15);
    } catch {
      // Silent fail
    }
  }
}

export const sound = new SoundEngine();
