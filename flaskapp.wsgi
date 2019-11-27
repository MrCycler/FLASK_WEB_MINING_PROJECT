activate_this = '/home/ubuntu/FLASK_WEB_MINING_PROJECT/venv_flask/bin/activate_this.py'
with open(activate_this) as f:
 exec(f.read(), dict(__file__=activate_this))
import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/home/ubuntu/FLASK_WEB_MINING_PROJECT")
from __init__ import app as application