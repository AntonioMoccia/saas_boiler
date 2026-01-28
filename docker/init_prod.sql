CREATE DATABASE saas_boiler;

/* -- Abilita PostGIS
CREATE EXTENSION IF NOT EXISTS postgis;

-- Funzione Trigger per sincronizzare coords con lat/lng
CREATE OR REPLACE FUNCTION sync_event_coords()
RETURNS TRIGGER AS $$
BEGIN
  NEW.coords = ST_SetSRID(ST_MakePoint(NEW.lng, NEW.lat), 4326)::geography;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Applica il trigger alla tua tabella
CREATE TRIGGER trg_sync_event_coords
BEFORE INSERT OR UPDATE ON event_location
FOR EACH ROW
EXECUTE FUNCTION sync_event_coords(); */