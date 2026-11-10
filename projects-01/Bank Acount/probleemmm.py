def is_palindrome(S):
    S = S.strip()
    # Convert to lowercase to ignore case sensitivity (optional)
    S = S.lower()
    if S == S[::-1]:
        print("yes")
    else:
        print("no")