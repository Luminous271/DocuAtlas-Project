# Khol Bol Transcription

An audio ML system for **automatically transcribing khol performances into bols**.

Given a recording of a khol performance, the system will detect individual strokes, identify the corresponding bol, and produce a transcription.

For example:

```text
Khol recording
      ↓
Stroke detection
      ↓
Bol classification
      ↓
transcription

00:01.24  Dha
00:01.58  Ti
00:01.81  Ta
00:02.07  Kha
```

The initial focus is on **audio recordings of kirtans**, where the khol is often recorded alongside vocals and other instruments. The goal is to eventually handle realistic recordings rather than only clean, isolated strokes.

## Planned Phases

### Phase 1 — Stroke Classification

Create a dataset of individual khol strokes and train a baseline model to classify them into bols.

### Phase 2 — Stroke Transcription

Detect individual strokes within a recording and convert them into a sequence of bols with timestamps.

### Phase 3 — Real Kirtan Recordings

Evaluate and improve the system on real-world kirtan recordings containing other instruments and background noise.

### Phase 4 — Web Application

Build a simple web interface where users can upload a recording and view the generated bol transcription.

### Phase 5 — Refinement

Improve transcription accuracy and robustness using additional data, better modeling, and contextual information from surrounding strokes.
