from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from .bb84 import bb84_protocol
from .crypto import encrypt_message, decrypt_message
import os

# Generate a quantum key
quantum_key = bb84_protocol(128)
quantum_key_bytes = bytes(quantum_key[:16])

users = {
    "user1": encrypt_message(quantum_key_bytes, "password1"),
    "user2": encrypt_message(quantum_key_bytes, "password2")
}

def home(request):
    return render(request, 'login.html')

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        if username in users:
            encrypted_password = users[username]
            decrypted_password = decrypt_message(quantum_key_bytes, encrypted_password)
            if password == decrypted_password:
                request.session['username'] = username
                return redirect('dashboard')
        return HttpResponse("Invalid credentials")
    return render(request, 'login.html')

def dashboard(request):
    if 'username' in request.session:
        return HttpResponse(f"Welcome {request.session['username']}!")
    return redirect('home')

def logout(request):
    auth_logout(request)
    return redirect('home')