<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
 

  <title>Drug Request Management System</title>

  <!-- Favicon -->
  <link rel="shortcut icon" href="{{ asset('tailor.jpg') }}">
  <link rel="preconnect" href="https://fonts.gstatic.com" />

  <!-- Font -->
  <link href="{{ asset('fonts.googleapis.css') }}" rel="stylesheet" />

  <script src="{{ asset(mix('js/app.js')) }}" defer></script>
</head>

<body>
  <noscript>
    <strong>This Template doesn't work properly without JavaScript enabled.
      Please enable it to continue.</strong>
  </noscript>

  <div id="app">
    
  </div>
</body>

</html>
