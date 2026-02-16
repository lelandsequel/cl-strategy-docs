# Google Slides API

Autonomous deck building with AI-generated images.

## OAuth Setup

1. Get OAuth credentials from Google Cloud Console
2. Use localhost callback: `http://localhost:8080`
3. Exchange auth code for tokens
4. Save refresh token

## Credentials

```
Client ID: 93216709183-j6euf5cogcnqlaqg39167hn2au6nockk.apps.googleusercontent.com
Client Secret: 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
```

## Token Storage

Tokens saved in: `scripts/google_tokens.json`

## API Endpoints

- Create presentation: `POST https://slides.googleapis.com/v1/presentations`
- Add slide: `POST https://slides.googleapis.com/v1/presentations/{id}:batchUpdate`
- Insert image: Use Drive API first, then Slides API

## Workflow

1. Generate images with Gemini/nano-banana-pro
2. Upload to Google Drive
3. Insert into Slides
4. Add text content via API

## Test Deck

- ID: `1UrLU0fxN73YXoNY22__jRMbpWJztOQIacht1ZzkeJmE`
- URL: https://docs.google.com/presentation/d/1UrLU0fxN73YXoNY22__jRMbpWJztOQIacht1ZzkeJmE/edit
