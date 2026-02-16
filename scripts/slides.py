#!/usr/bin/env python3
"""
Google Slides API - Create presentation with images and text
"""
import os
import json
import pickle
from google_auth_oauthlib.flow import InstalledAppFlow
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/presentations', 'https://www.googleapis.com/auth/drive.file']
TOKEN_FILE = '/Users/sokpyeon/.openclaw/workspace/scripts/google_tokens.json'
CLIENT_SECRETS = '/Users/sokpyeon/.openclaw/workspace/scripts/client_secrets.json'

def get_credentials():
    """Get or create credentials"""
    if os.path.exists(TOKEN_FILE):
        with open(TOKEN_FILE, 'r') as f:
            creds_data = json.load(f)
            return Credentials.from_authorized_user_info(creds_data, SCOPES)
    
    # Need to get new credentials
    flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRETS, SCOPES)
    creds = flow.run_local_server(port=8080)
    
    # Save for later
    with open(TOKEN_FILE, 'w') as f:
        f.write(creds.to_json())
    
    return creds

def create_presentation(service, title):
    """Create a new presentation"""
    body = {
        'title': title
    }
    presentation = service.presentations().create(body=body).execute()
    return presentation['presentationId']

def add_slide_with_text(service, presentation_id, title, content):
    """Add a slide with title and content"""
    # Create text elements
    requests = [
        {
            'createShape': {
                'shapeType': 'TEXT_BOX',
                'elementProperties': {
                    'pageObjectId': 'slide1',
                    'size': {'width': {'magnitude': 400, 'unit': 'PT'}, 'height': {'magnitude': 100, 'unit': 'PT'},
                    'transform': {'scaleX': 1, 'scaleY': 1, 'translateX': 50, 'translateY': 100}
                }
            }
        }
    ]
    
    # This is simplified - would need more detailed requests
    print(f"Slide: {title}")
    print(f"Content: {content}")

def main():
    # Note: Need to get OAuth tokens first via web browser
    print("This script needs OAuth setup.")
    print("Run the OAuth flow manually to get tokens saved.")

if __name__ == '__main__':
    main()
