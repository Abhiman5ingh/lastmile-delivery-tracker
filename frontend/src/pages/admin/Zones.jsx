import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import API from "../../api/axios";
import toast from "react-hot-toast";

export default function Zones() {

  const [zones, setZones] = useState([]);

  const [zoneName, setZoneName] = useState("");

  const [areas, setAreas] = useState("");

  useEffect(() => {

    fetchZones();

  }, []);

  const fetchZones = async () => {

    const res = await API.get("/zones");

    setZones(res.data.zones);

  };

  const createZone = async () => {

    try {

      await API.post("/zones", {

        zoneName,

        areas: areas.split(","),

      });

      toast.success("Zone Added");

      setZoneName("");

      setAreas("");

      fetchZones();

    } catch {

      toast.error("Error");

    }

  };

  return (

    <DashboardLayout>

      <h2>

        Zone Management

      </h2>

      <div className="row mt-4">

        <div className="col-md-4">

          <input

            className="form-control mb-2"

            placeholder="Zone Name"

            value={zoneName}

            onChange={(e)=>setZoneName(e.target.value)}

          />

          <textarea

            className="form-control mb-3"

            rows="5"

            placeholder="Area1,Area2,Area3"

            value={areas}

            onChange={(e)=>setAreas(e.target.value)}

          />

          <button

            className="btn btn-primary"

            onClick={createZone}

          >

            Create Zone

          </button>

        </div>

        <div className="col-md-8">

          <div className="table-card">

            <table className="table">

              <thead>

                <tr>

                  <th>Zone</th>

                  <th>Areas</th>

                </tr>

              </thead>

              <tbody>

                {

                  zones.map(zone=>(

                    <tr key={zone._id}>

                      <td>

                        {zone.zoneName}

                      </td>

                      <td>

                        {zone.areas.join(", ")}

                      </td>

                    </tr>

                  ))

                }

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

}