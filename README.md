Diagram of user creating a new notre on  https://studies.cs.helsinki.fi/exampleapp/notes


sequenceDiagram
    participant User
    participant Server

    User->>Server: Request
    activate Server
    Server-->>User: Response
    deactivate Server

    Note right of Server: This is a note.
